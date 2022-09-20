import React, { useState } from "react";
import { AppShell } from "../components";
import { Form, Typography, Input, Button, Select, Segmented, Row, Col, Alert, Space } from 'antd'
import { PhoneOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { usePayment } from "../hooks/PaymentHook";

/**
    * @typedef {Object} PaymentData
    * @property {string} payer
    * @property {number} amount
    * @property {string} reference
    * @property {boolean} conversion
    * @property {string} country
    * @property {string} message
*/

const RequestPaymentPage = () => {
    const [loading, setLoading] = useState(false)
    const [paymentPackage, setPaymentPackage] = useState(1)
    const [form] = Form.useForm();
    const { Option } = Select;
    const navigate = useNavigate();
    const { collect } = usePayment()

    const onFinish = async (values) => {
        setLoading(true);

        /** @type PaymentData */
        const formData = {
            ...values,
            amount: 3,
            // amount: paymentPackage === 1 ? 20_000 : 50_000,
            reference: "coding bootcamp",
            fees: false,
            conversion: false,
            country: "CM",
            message: "Payment for coding bootcamp"
        }

        const res = await collect(formData)
        if (res) {
            setLoading(false);
            form.resetFields()
            navigate(ROUTES.PAYMENT_SUCCESS)
        }
        setLoading(false);
    }
    return (
        <AppShell>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Typography.Title>Course purchase</Typography.Title>
                <Typography.Paragraph>Select your plan to complete purchage</Typography.Paragraph>
            </div>
            <Row>
                <Col xs={24} lg={{ span: 12, offset: 6 }}>
                    <Alert
                        style={{ textAlign: 'center', marginBottom: '20px' }}
                        message={<>
                            You will be billed {" "}
                            <strong>{paymentPackage === 1 ? '20,000XAF' : '50,000XAF'}</strong> {" "}
                            for the selected package including the charges
                        </>}
                    />

                    <Form
                        form={form}
                        name="paymen_form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Segmented
                            block
                            size="middle"
                            defaultValue={paymentPackage}
                            options={[{ label: 'Monthly', value: 1 }, { label: 'Complete package', value: 2 }]}
                            onChange={(value) => setPaymentPackage(value)}
                            style={{ marginBottom: '1rem' }}
                        />

                        <Form.Item
                            name="service"
                            rules={[
                                {
                                    required: true,
                                    message: 'Select payment method',
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select payment method"
                                onChange={(value) => form.setFieldValue('service', value)}
                            >
                                <Option value="MTN">MTN Momo</Option>
                                <Option value="ORANGE">Orange Money</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="payer"
                            rules={[
                                {
                                    required: true,
                                    message: 'Momo number is required',
                                },
                            ]}
                        >
                            <Input
                                prefix={<><PhoneOutlined className="site-form-item-icon" /><span>+237</span></>}
                                type="text"
                                placeholder="You momo number"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Space>
                                <Button icon={<ArrowLeftOutlined />} size="middle" onClick={() => navigate(-1)}>
                                    Go back
                                </Button>
                                <Button size="middle" disabled={loading} loading={loading} type="primary" htmlType="submit" className="login-form-button">
                                    Request payment
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </AppShell >
    )
}

export default RequestPaymentPage
