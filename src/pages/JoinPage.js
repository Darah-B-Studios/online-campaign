import React, { useCallback, useEffect, useState } from "react";
import { AppShell } from "../components";
import { Form, Typography, Input, Button, Alert, Select, message } from "antd";
import {
  PlusOutlined,
  GlobalOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import { supabase } from "../supaBaseClient";
import { useInitialData } from "../hooks/InitialData";

const JoinPage = () => {
  const {getCountryData} = useInitialData()
  const [loading, setLoading] = useState(false);
  const [isLoadingInit, setIsLoadingInit] = useState(false);
  const [teams, setTeams] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);
  const [countries, setCountries] = useState([]);
  const [form] = Form.useForm();

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
    const { data, error } = await supabase.from("profile").insert(formValues);
    if (data) {
      form.resetFields();
      setLoading(false);
      message.success("You have successfully join the campaign");
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
      console.log("teams error: ", error);
      message.error("Oops! something went wrong. Please try again");
    }
  }, []);

  useEffect(() => {
    setIsLoadingInit(true);
    const countries = getCountryData()
    if(countries){setCountries(countries)}
    getTeams();
    setIsLoadingInit(false);
  }, []);

  return (
    <AppShell>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Typography.Title>Join the movement</Typography.Title>
        <Typography.Paragraph>
          Be a part of the movement to protect children
        </Typography.Paragraph>
      </div>
      <Form
        form={form}
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
          label="Your country"
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
          labelCol={24}
          label="Zip code"
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
          requiredMark
          rules={[
            {
              required: true,
              message: "Team is required",
            },
          ]}
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
        <Form.Item
          name="nickname"
          labelCol={24}
          label="Provide a nickname (alias)"
          requiredMark
          rules={[
            {
              required: true,
              message: "Nickname is required",
            },
          ]}
        >
          <Input placeholder="Optional nickname" />
        </Form.Item>
        <Form.Item labelCol={24} label="Optional email address" name="email">
          <Input type="email" placeholder="Optional email" />
        </Form.Item>
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
