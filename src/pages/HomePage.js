import React from "react";
import {
  AggregateChart,
  AppShell,
  ProfileTable,
  WorldMap,
} from "../components";
import "../styles/home-page.style.scss";
import "../styles/bootcamp-page.scss";
import { Card, Col, Row, Typography } from "antd";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";
import AggregateTable from "../components/AggreateTable";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      {/* banner section */}
      <Row gutter={[16, 32]} style={{ marginTop: "3rem" }}>
        <Col md={12}>
          <Card cover={<WorldMap />} bordered={false} />
        </Col>
        <Col md={12}>
          <header className="header">
            <Typography.Title
              style={{
                textTransform: "uppercase",
                letterSpacing: "-2px",
                marginBottom: "-.2rem",
              }}
            >
              November 18
            </Typography.Title>
            <p>Marks the first united nations</p>
            <p>
              World Day for the Prevention of, and Healing from Child Sexual
              Exploitation, Abuse and Violence
            </p>
            <p className="header__text">
              World day for the prevention and healing of child sexual abuse and
              violence.
            </p>
            <span>Join us to</span>
            <h4>Light a Candle</h4>
            <p>
              and help bring the tragey of child sexual violence out of the
              darkness
            </p>
            <button
              className="button button_primary"
              onClick={() => navigate(ROUTES.JOIN)}
            >
              Join now
            </button>
            <span className="hashtag">#Nov18worldday</span>

            {/* Add logo here */}
          </header>
        </Col>
      </Row>
      <Row gutter={[16, 32]} align="middle" justify="center">
        <AggregateChart />
        <AggregateTable />
        <ProfileTable />
      </Row>
    </AppShell>
  );
};

export default HomePage;
