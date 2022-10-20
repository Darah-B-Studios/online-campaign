import React, { useCallback, useEffect, useState } from "react";
import { AppShell } from "../components";
import { Form, Typography, Input, Button, Alert, Select } from 'antd'
import { PlusOutlined, GlobalOutlined, QrcodeOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { supabase } from "../supaBaseClient";
import { useAppStore } from "../contexts/AppStoreContext";

const JoinPage = () => {
    const [loading, setLoading] = useState(false)
    const [errorMessages, setErrorMessages] = useState(null)
    const [countries, setCountries] = useState([])
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {setUser} = useAppStore()

    const onFinish = async ({ email, password }) => {
        setLoading(true);
        const { user, error } = await supabase.auth.signIn({ email, password })
        if (user) {
            setUser(user)
            console.log("current user: ", user)
            form.resetFields()
            setLoading(false);
            navigate(ROUTES.LOGIN_SUCCESS)
        }
        if (error) {
            setLoading(false);
            setErrorMessages(error.message)
            return <Alert message={error.message} closable type="error" />
        }
    }

    const getCountryData = useCallback(async() => {
        try {
            const data = await fetch("https://restcountries.com/v3.1/all")
            let countries = await data.json()
            console.log('countries: ', countries)
            countries = countries.map(country => {
                return {
                    name: country.name.common,
                    flag: country.flag,
                    code: country.cca3,
                }
            })
            setCountries(countries)
        }catch(err) {
            console.log("countries error: ", err)
        }
    }, [])

    useEffect(() => {
        getCountryData()
    }, [])

    return (
        <AppShell>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Typography.Title>Join the campaign</Typography.Title>
                <Typography.Paragraph>Get registered now for the campaign</Typography.Paragraph>
            </div>
            <Form
                form={form}
                name="join-campaign-form"
                className="login-form"
                onFinish={onFinish}
        initialValues={{countries: countries}}
            >
                {errorMessages && <Alert type="error" message={errorMessages} style={{marginBottom: '1rem'}} />}
                <Form.Item
                    name="zipCode"
                    rules={[
                        {
                            required: true,
                            message: 'Your zip code',
                        },
                    ]}
                >
                    <Input
                        prefix={<QrcodeOutlined className="site-form-item-icon" />}
                        placeholder="zip"
                    />
                </Form.Item>
                <Form.Item
                    name="countryCode"
                    rules={[
                        {
                            required: true,
                            message: 'Country is required',
                        },
                    ]}
                >
                    <Select
                        prefix={<GlobalOutlined className="site-form-item-icon" />}
                        placeholder="Select country"
                        showSearch
                    >
                    {
                        countries.map((country, index) => (
                            <Select.Option key={index} value={country.code}>{country.flag} {country.name}</Select.Option>
                        ))
                    }
                    </Select>
                </Form.Item>
                <Button icon={<PlusOutlined />} block disabled={loading} loading={loading} type="primary" htmlType="submit" className="login-form-button">
                  Join
                </Button>
            </Form>
        </AppShell>
    )
}

export default JoinPage
