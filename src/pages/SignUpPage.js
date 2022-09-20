import React, { useState } from "react";
import { AppShell } from "../components";
import { Typography, Form, Input, Button, Row, Col } from "antd"
import { UserOutlined, LockOutlined, RedEnvelopeOutlined } from "@ant-design/icons"
import "../styles/login-page.scss"
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        setLoading(true);
        console.log('values:', values);
        setLoading(false);
        form.resetFields()
    }

    return (
        <AppShell>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Typography.Title>Sign up</Typography.Title>
                <Typography.Paragraph>Setup your account now and start learning all the required skills</Typography.Paragraph>
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
                <Row gutter={[8, 8]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last name" />
                        </Form.Item>
                    </Col>
                </Row>
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
                    Already have an account?
                    <Button type="link" onClick={() => navigate(ROUTES.LOGIN)}>Sign in</Button>
                </Typography.Paragraph>
                <Form.Item>
                    <Button disabled={loading} loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </AppShell>
    )
}

export default SignUpPage

