import React, { useState } from "react";
import { AppShell } from "../components";
import { Form, Typography, Input, Button, Alert, Space } from "antd";
import { RedEnvelopeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { supabase } from "../supaBaseClient";
import { useAppStore } from "../contexts/AppStoreContext";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setUser } = useAppStore();

  const onFinish = async ({ email }) => {
    setLoading(true);
    const { user, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "localhost:3000/reset-password",
    });
    if (user) {
      setUser(user);
      console.log("current user: ", user);
      form.resetFields();
      setLoading(false);
      navigate(ROUTES.LOGIN_SUCCESS);
    }
    if (error) {
      setLoading(false);
      setErrorMessages(error.message);
      return <Alert message={error.message} closable type="error" />;
    }
  };
  return (
    <AppShell>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Typography.Title>Forgot Password</Typography.Title>
        <Typography.Paragraph>
          Provide your email address and we'll send a reset link
        </Typography.Paragraph>
      </div>
      <Form
        form={form}
        className="login-form"
        name="password-reset"
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
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            disabled={loading}
            block
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Send reset link
          </Button>
          <Button type="ghost" block onClick={() => navigate(-1)}>
            Back
          </Button>
        </Space>
      </Form>
    </AppShell>
  );
};

export default ForgotPasswordPage;
