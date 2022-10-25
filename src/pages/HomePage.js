import React from "react";
import { AppShell } from "../components";
import "../styles/home-page.style.scss";
import "../styles/bootcamp-page.scss"
import { Button, Card, Col, Row, Space } from "antd";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const eitheenNov = new Date("11/18/2022");
  const now = new Date();
  const diff = eitheenNov.getTime() - now.getTime();
  const totalDaysLeft = Math.ceil(diff / (1000 * 3600 * 24));

  const { data } = useMapData();
  console.log("data: ", data)
  return (
    <AppShell>
      {/* banner section */}
      <Row gutter={[16, 32]} style={{marginTop: '3rem'}}>
      <Col md={12}>
        <Card
          cover={<img alt="example" src="/images/map-2.png" />}
        />
      </Col>
      <Col md={12}>
             <header className="header">
                <h2 className="header__title">Become <span className="header__title_decorated">part of the movement,</span> Protect kids.</h2>
                <p className="header__text">World day for the prevention and healing of child sexual abuse and violence.</p>
                <button className="button button_primary" onClick={() => navigate(ROUTES.JOIN)}>Join now</button>
            </header>

       <div style={{marginTop: '1rem'}}>
            <Space style={{margin: '0 auto'}}>
              <Button
                type="primary"
                style={{ marginTop: 25 }}
                className="get_started__btn"
                onClick={() => navigate(ROUTES.JOIN)}
              >
                Get started
              </Button>
              <Button
                type="primary"
                style={{ marginTop: 25 }}
                onClick={() => navigate(ROUTES.TEAM)}
              >
                Create team
              </Button>

              <Button
                type="primary"
                style={{ marginTop: 25 }}
                onClick={() => navigate(ROUTES.ORGANIZATION)}
              >
                Create organization
              </Button>
            </Space>
      </div>
      </Col>
      </Row>
    </AppShell>
  );
};

export default HomePage;
