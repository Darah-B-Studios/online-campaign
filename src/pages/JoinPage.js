import React, { useCallback, useEffect, useState } from "react";
import { AppShell } from "../components";
import {
  Form,
  Typography,
  Input,
  Button,
  Alert,
  Select,
  message,
} from "antd";
import {
  PlusOutlined,
  GlobalOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import { supabase } from "../supaBaseClient";
import { useInitialData } from "../hooks/InitialData";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const JoinPage = () => {
  const { getCountryData } = useInitialData();
  const [loading, setLoading] = useState(false);
  const [loadInit, setIsLoadingInit] = useState(false);
  const [teams, setTeams] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);
  const [countries, setCountries] = useState([]);
  const [form] = Form.useForm();
  const router = useNavigate();

  /**
   * @typedef {Object} Profile - profile class for users
   * @property {string} country - country code
   * @property {string} zipCode - zip code
   * @property {string} teamId - team Id
   * @property {string} nickname - nickname
   * @property {string?} email - optional email addres
   */

  /**
   * @param {Profile} formValues
   */
  const onFinish = async (formValues) => {
    setLoading(true);
    const obj = {
      ...formValues,
        teamId: 1,
      nickname: "",
      email: "",
    };
    const { data, error } = await supabase.from("profile").insert(obj);
    if (data) {
      form.resetFields();
      setLoading(false);
      message.success("You have successfully joined the campaign");
      window.location.replace('https://globalcollaborative.org')
    }
    if (error) {
      setLoading(false);
      setErrorMessages(error.message);
      return <Alert message={error.message} closable type="error" />;
    }
  };

  const getTeams = useCallback(async () => {
    const { data, error } = await supabase.from("teams").select();
    if (data) {
      setTeams(data);
    }
    if (error) {
      // console.log("teams error: ", error);
      message.error("Oops! something went wrong. Please try again");
    }
  }, []);

  const loadData = useCallback(async () => {
    setIsLoadingInit(true);
    const countries = await getCountryData();
    if (countries) {
      setCountries(countries);
    }
    getTeams();
    setIsLoadingInit(false);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AppShell>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <div
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiArrowLeft size={21} />
          <Button
            type="link"
            style={{ marginLeft: 0 }}
            onClick={() => router(`/`)}
            danger
          >
            Go Back
          </Button>
        </div>

        <Typography.Title style={{color: '#fff'}}>Join the movement</Typography.Title>
        <Typography.Paragraph style={{color: 'grey'}}>
          Be a part of the movement to protect children
        </Typography.Paragraph>
      </div>
      <Form
        form={form}
        onLoadedData={(e) => console.log(e)}
        layout="vertical"
        name="join-campaign-form"
        className="login-form"
        onFinish={onFinish}
        initialValues={{ countries: countries }}
      >
        {errorMessages && (
          <Alert
            type="error"
            message={errorMessages}
            style={{ marginBottom: "1rem" }}
          />
        )}
        <Form.Item
          name="countryCode"
          requiredMark
          labelCol={24}
          label={<p style={{color: 'grey'}}>Your country</p>}
          style={{color: 'grey'}}
          rules={[
            {
              required: true,
              message: "Country is required",
            },
          ]}
        >
          <Select
            prefix={<GlobalOutlined className="site-form-item-icon" />}
            placeholder="Select country"
            showSearch
          >
            {countries
              .sort((a, b) => a.name > b.name)
              .map((country, index) => (
                <Select.Option key={index} value={country.code}>
                  {country.flag} {country.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="zipCode"
          style={{color: 'grey'}}
          labelCol={24}
          label={<p style={{color: 'grey'}}>Zipe code</p>}
          requiredMark
          rules={[
            {
              required: true,
              message: "Your zip code",
            },
          ]}
        >
          <Input
            prefix={<QrcodeOutlined className="site-form-item-icon" />}
            placeholder="zip"
          />
        </Form.Item>
        <Form.Item
          name="teamId"
          labelCol={24}
          label="Select team"
          style={{display: 'none'}}
        >
          <Select
            prefix={<GlobalOutlined className="site-form-item-icon" />}
            placeholder="Select team"
            showSearch
          >
            {teams
              .sort((a, b) => a.name > b.name)
              .map((team, index) => (
                <Select.Option key={index} value={team.id}>
                  {team.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        {/* <Form.Item
          name="nickname"
          labelCol={24}
          label="Provide a nickname (alias)"
          // requiredMark
          // rules={[
          //   {
          //     required: true,
          //     message: "Nickname is required",
          //   },
          // ]}
        >
          <Input placeholder="Optional nickname" />
        </Form.Item>
        <Form.Item labelCol={24} label="Optional email address" name="email">
          <Input type="email" placeholder="Optional email" />
        </Form.Item> */}
        <Button
          icon={<PlusOutlined />}
          block
          disabled={loading}
          loading={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Join
        </Button>
      </Form>
    </AppShell>
  );
};

export default JoinPage;
