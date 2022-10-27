import {
  Alert,
  Button,
  Form,
  Input,
  message,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components";
import { TABLES } from "../constants/tables";
import { ROUTES } from "../routes";
import { supabase } from "../supaBaseClient";

/**
 * @typedef {Object} Team
 * @property {string} name
 * @property {string} email
 * @property {number} organization
 */
const TeamsPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate()
  const { Option } = Select;

  const getOrganizations = useCallback(async () => {
    const { data, error } = await supabase.from("organization").select();
    if (data) {
      setOrganizations(data);
    }
    if (error) {
      console.log("error: ", error.message);
    }
  }, []);

  /**
   * @function onFinish
   * @param {Team} formData
   * @returns {string} data
   */
  const onFinish = async (formData) => {
    setLoading(true);
    setErrorMessage(null);
    const { data, error } = await supabase.from(TABLES.TEAMS).insert(formData);
    if (data) {
      form.resetFields();
      setLoading(false);
      message.success(
        `You have successfully created the ${formData.name} team`
      );
    }
    if (error) {
      setErrorMessage(error.message);
      form.resetFields();
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);
  return (
    <AppShell>
      <div style={{ width: "30rem", margin: "2rem auto", maxWidth: '100%' }}>
        <div style={{ textAlign: "center" }}>
          <Typography.Title>Create a team</Typography.Title>
          <Typography.Paragraph>Create your own team here</Typography.Paragraph>
        </div>

        {errorMessage && (
          <Alert
            type="error"
            message={errorMessage}
            style={{ margin: "1rem 0" }}
          />
        )}

        <Form
          name="teams-form"
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="organizationId"
            label="Select organization"
            labelCol={24}
            rules={[
              {
                required: true,
                message: "organization name is required",
              },
            ]}
          >
            <Select>
              {organizations.map((organization, index) => (
                <Option key={index} value={organization.id}>
                  {organization.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="name"
            label="Team name"
            labelCol={24}
            rules={[
              {
                required: true,
                message: "Team name is required",
              },
            ]}
          >
            <Input placeholder="Create team name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Your email address"
            labelCol={24}
            rules={[
              {
                required: true,
                message: "Your email address is required",
              },
            ]}
          >
            <Input type="email" placeholder="Enter your email address" />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
            <Button htmlType="reset" loading={loading}>
              Reset
            </Button>
          </Space>
        
        <Typography.Paragraph>Didn't see your organization? <Button type="link" onClick={() => navigate(ROUTES.ORGANIZATION)}>Create your organization</Button></Typography.Paragraph>

        </Form>
      </div>
    </AppShell>
  );
};

export default TeamsPage;
