import React from "react";
import { AppShell, ProfileTable } from "../components";
import "../styles/home-page.style.scss";
import "../styles/bootcamp-page.scss";
import { Card, Col, Row, Space } from "antd";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // const { data } = useMapData();
  // console.log("data: ", data)
  return (
    <AppShell>
      {/* banner section */}
      <Row gutter={[16, 32]} style={{ marginTop: "3rem" }}>
        <Col md={12}>
          <Card cover={<img alt="example" src="/images/map-2.png" />} />
        </Col>
        <Col md={12}>
          <header className="header">
            <h2 className="header__title">
              Become{" "}
              <span className="header__title_decorated">
                part of the movement,
              </span><br />
              Protect kids.
            </h2>
            <p className="header__text">
              World day for the prevention and healing of child sexual abuse and
              violence.
            </p>
              <Space>
                    <button
                      className="button button_primary"
                      onClick={() => navigate(ROUTES.JOIN)}
                    >
                      Join a team
                    </button>
                    <button
                      className="button button_secondary"
                      onClick={() => navigate(ROUTES.TEAM)}
                    >
                      Start a team
                    </button>
              </Space>
          </header>
        </Col>
      </Row>
      <ProfileTable />
    </AppShell>
  );
};

export default HomePage;
