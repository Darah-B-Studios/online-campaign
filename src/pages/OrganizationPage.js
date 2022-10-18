import { Alert, Button, Form, Input, message, Space, Typography } from "antd";
import React, { useState } from "react";
import { AppShell } from "../components";
import { supabase } from "../supaBaseClient";

/**
 * @typedef {Object} Organization
 * @property {string} name
 * @property {string} firstname
 * @property {string} lastname
 */
const OrganizationPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * @function onFinish
   * @param {Organization} formData
   * @returns {string} data
   */
  const onFinish = async (formData) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("organization")
      .insert(formData);
    if (data) {
      setErrorMessage(null);
      form.resetFields();
      setLoading(false);
      message.success(
        `You have successfully created the ${formData.name} organization`
      );
    }
    if (error) {
      setErrorMessage(error.message);
      form.resetFields();
      setLoading(false);
    }
  };

  return (
    <AppShell>
      <div style={{ width: "30rem", margin: "2rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <Typography.Title>Create a organization</Typography.Title>
          <Typography.Paragraph>
            Create your own organization here
          </Typography.Paragraph>
        </div>

        {errorMessage && (
          <Alert
            type="error"
            message={errorMessage}
            style={{ margin: "1rem 0" }}
          />
        )}

        <Form
          name="organizations-form"
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Organization name"
            labelCol={24}
            rules={[
              {
                required: true,
                message: "Organization name is required",
              },
            ]}
          >
            <Input placeholder="Create organization name" />
          </Form.Item>
          <Form.Item
            name="firstname"
            label="Your first name"
            labelCol={24}
            rules={[
              {
                required: true,
                message: "Your first name is required",
              },
            ]}
          >
            <Input type="text" placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Your last name"
            labelCol={24}
            rules={[
              {
                required: true,
                message: "Your last name is required",
              },
            ]}
          >
            <Input type="text" placeholder="Enter your last name" />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
            <Button htmlType="reset" loading={loading}>
              Reset
            </Button>
          </Space>
        </Form>
      </div>
    </AppShell>
  );
};

export default OrganizationPage;
