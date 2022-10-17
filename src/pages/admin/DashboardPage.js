import React, { useEffect, useState } from "react";
import { AppShell } from "../../components";
import { Row, Col, Typography, Breadcrumb, Button, Tabs } from "antd"
import { DollarOutlined, PaperClipOutlined, CreditCardOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../contexts/AppStoreContext";
import PaymentHistoryTable from "../../components/dashboard/payment-history/PaymentHistoryTable";
import VideoResources from "../../components/dashboard/video-resources/VideoResourceList";
import { supabase } from "../../supaBaseClient";

const DashboardPage = () => {
    const navigate = useNavigate()
    const { user, setUser, payments } = useAppStore()
    const [activeTab, setActiveTab] = useState('1');
        
    console.log('payments: ', payments)
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error)
            console.log('logout', error)
        else {
            setUser(null)
            navigate(ROUTES.HOME)
        }
    }

    useEffect(() => {
        if (!supabase.auth.user() || !user) {
            return navigate(ROUTES.LOGIN)
        }

        if (user.hasPayed === false) {
            return navigate(ROUTES.REQUEST_PAYMENT)
        }
    }, [user])

    return (
        <AppShell>
            <Row>
                <Col md={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }} xl={{ span: 16, offset: 4 }}>
                    <Breadcrumb style={{ marginTop: '1rem' }}>
                        <Breadcrumb.Item href={ROUTES.HOME}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                        <Typography.Title>Dashboard</Typography.Title>
                        <Button onClick={handleLogout}>Logout</Button>
                    </div>
                    <Button type="primary" onClick={() => navigate(ROUTES.REQUEST_PAYMENT)} icon={<DollarOutlined />}>Pay now</Button>
                    <Tabs
                        defaultActiveKey={activeTab}
                        onChange={(key) => setActiveTab(key)}
                        type="card"
                        style={{ marginTop: '1rem' }}
                        items={[
                            {
                                label: <span><VideoCameraOutlined /> Videos</span>,
                                key: '1',
                                children: <VideoResources />
                            },
                            {
                                label: <span><PaperClipOutlined /> Resource</span>,
                                key: '2',
                                children: "Custom resources"
                            },
                            {
                                label: <span><CreditCardOutlined /> Payment history</span>,
                                key: '3',
                                children: <PaymentHistoryTable />
                            },
                        ]}
                    />
                </Col>
            </Row>
        </AppShell>
    )
}

export default DashboardPage
