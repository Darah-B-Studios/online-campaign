import React from "react";
import { AppShell } from "../components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { Button, Col, Row, Result } from "antd";

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <AppShell>
            <Row>
                <Col xs={24} lg={{ span: 12, offset: 6 }}>
                    <Result
                        status="success"
                        title="Successfull payment for course"
                        subTitle="Thank you for your payment."
                        extra={
                            <Button color="green" onClick={() => navigate(ROUTES.ADMIN.DASHBOARD)}>Back to dashboard</Button>
                        }
                    />
                </Col>
            </Row>
        </AppShell >
    )
}

export default PaymentSuccessPage

