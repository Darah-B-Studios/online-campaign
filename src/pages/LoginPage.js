import React, { useState } from "react";
import { AppShell } from "../components";
import { Form, Typography, Input, Button, Alert } from 'antd'
import { LockOutlined, RedEnvelopeOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { supabase } from "../supaBaseClient";
import { useInitialData } from "../hooks/InitialData";
import { useAppStore } from "../contexts/AppStoreContext";

const LoginPage = () => {
    const { loadUserInitialData } = useInitialData()
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {setUser} = useAppStore()

    const onFinish = async ({ email, password }) => {
        setLoading(true);
        const { user, error } = await supabase.auth.signIn({ email, password })
        if (user) {
            setUser(user)
            console.log('data: ', user)
            await loadUserInitialData()
            setLoading(false);
        }
        if (error) {
            console.log('errors: ', error)
            setLoading(false);
            form.resetFields()
            return <Alert message={error.message} closable type="error" />
        }
    }
    return (
        <AppShell>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Typography.Title>Sign in</Typography.Title>
                <Typography.Paragraph>Welcome back, we're happy you want to continure learning</Typography.Paragraph>
            </div>
            <Form
                form={form}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email address!',
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
                            message: 'Please input your Password!',
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
                    Don't have an account?
                    <Button type="link" onClick={() => navigate(ROUTES.SIGN_UP)}>Sign up</Button>
                </Typography.Paragraph>
                <Form.Item>
                    <Button disabled={loading} loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </AppShell>
    )
}

export default LoginPage
