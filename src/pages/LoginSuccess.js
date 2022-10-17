import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components";
import { ROUTES } from "../routes";

const LoginSuccessPage = () => {
    const navigate = useNavigate()

    return (
        <AppShell>
            <Result
                status="success"
                title="Successfully created your account"
                subTitle="Check your email address verify your account"
                extra={[
                  <Button key="home" type="primary" onClick={() => navigate(ROUTES.HOME)}>Home</Button>,
                ]}
                style={{marginTop: '3rem'}}
            />
        </AppShell>
    )
}
export default LoginSuccessPage
