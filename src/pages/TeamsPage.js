import { Alert, Button, Form, Input, message, Space, Typography } from "antd";
import React, { useState } from "react";
import { AppShell } from "../components";
import { supabase } from "../supaBaseClient";

/**
* @typedef {Object} Team
* @property {string} name
* @property {string} email
*/
const TeamsPage = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    /**
        * @function onFinish
        * @param {Team} formData
        * @returns {string} data
        */
    const onFinish = async (formData) => {
        setLoading(true)
        const {data, error} = await supabase.from('teams').insert(formData)
        if(data) {
            setErrorMessage(null)
            form.resetFields()
            setLoading(false)
            message.success(`You have successfully created the ${formData.name} team`)
        }
        if(error) {
            setErrorMessage(error.message)
            form.resetFields()
            setLoading(false)
        }
    }

    return (
        <AppShell>
            <div style={{width: '30rem', margin: '2rem auto'}}>
                <div style={{textAlign: 'center'}}>
                    <Typography.Title>Create a team</Typography.Title>
                    <Typography.Paragraph>Create your own team here</Typography.Paragraph>
                </div>
                    
                {errorMessage && <Alert type="error" message={errorMessage} style={{margin: '1rem 0'}} />}

                <Form
                    name="teams-form"
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label="Team name"
                        labelCol={24}
                        rules={[{
                            required: true,
                            message: "Team name is required"
                        }]}
                    >
                       <Input placeholder="Create team name"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Your email address"
                        labelCol={24}
                        rules={[{
                            required: true,
                            message: "Your email address is required"
                        }]}
                    >
                       <Input type="email" placeholder="Enter your email address"/>
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
    )
}

export default TeamsPage
