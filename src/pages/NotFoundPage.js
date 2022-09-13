import { Button, Empty } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Empty description="Oops we cannot find this link">
                <Button type="primary" onClick={() => navigate(-1)}>Go back</Button>
            </Empty>
        </div>
    )
}

export default NotFoundPage

