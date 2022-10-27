import React, { useState } from "react";
import { AppShell } from "../components";
import { Typography, Form, Input, Button, Alert } from "antd";
import { LockOutlined, RedEnvelopeOutlined } from "@ant-design/icons";
import "../styles/login-page.scss";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState(null);

  const onFinish = async (values) => {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (error) {
      console.log("Error: ", error);
      setErrorMessages(error.message);
    }
    if (user) {
      console.log("user", user);
      navigate(ROUTES.LOGIN_SUCCESS);
    }
    setLoading(false);
    form.resetFields();
  };

  return (
    <AppShell>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Typography.Title>Sign up</Typography.Title>
        <Typography.Paragraph>
          Setup your account to be part of this campaign
        </Typography.Paragraph>
      </div>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        {errorMessages && (
          <Alert
            type="error"
            message={errorMessages}
            style={{ marginBottom: "1rem" }}
          />
        )}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email address!",
            },
          ]}
        >
          <Input
            prefix={<RedEnvelopeOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Typography.Paragraph>
          Already have an account?
          <Button type="link" onClick={() => navigate(ROUTES.LOGIN)}>
            Sign in
          </Button>
        </Typography.Paragraph>
        <Form.Item>
          <Button
            disabled={loading}
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </AppShell>
  );
};

export default SignUpPage;
