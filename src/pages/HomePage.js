import React from "react";
import { AggregateChart, AppShell, ProfileTable, WorldMap } from "../components";
import "../styles/home-page.style.scss";
import "../styles/bootcamp-page.scss";
import { Card, Col, Row } from "antd";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      {/* banner section */}
      <Row gutter={[16, 32]}>
        <Col md={12}>
          <Card className="dark_theme" cover={<WorldMap />} bordered={false} />
        </Col>
        <Col md={12}>
             <header className="header header__custom">
      <div className="header__content">
             <h4 className="header__title">November 18th</h4>
              <p className="header__text">Marks the first United Nations World Day for the Prevention of, and Healing from Child Sexual Exploitation, Abuse and Violence.
                  </p>
                  <span style={{fontSize: '1rem', color: 'orangred'}}>Join us to</span>
                  <h4 className="header__title">Light a Candle</h4>
                  <p className="header__text">and help bring the tragedy of child sexual violence out of the darkness</p>
                  <button
                    className="button button_primary"
                    onClick={() => navigate(ROUTES.JOIN)}
                  >
                    Join now
                  </button>
                  <p className="hashtag">#Nov18WorldDay</p>
          </div>
            <img src="images/candle.png" id="candle" />
                {/* Add logo here */}
          </header>
        </Col>
      </Row>
      <Row gutter={[16, 32]} align="middle" justify="center">
        <AggregateChart />
      {/* <AggregateTable /> */}
        <ProfileTable />
      </Row>
    </AppShell>
  );
};

export default HomePage;
