import React from "react";
import { AppShell } from "../components";
import "../styles/home-page.style.scss";
import { Button, Typography } from "antd";
const { Title } = Typography;

const HomePage = () => {
  const eitheenNov = new Date("11/18/2022");
  const now = new Date();
  const diff = eitheenNov.getTime() - now.getTime();
  const totalDaysLeft = Math.ceil(diff / (1000 * 3600 * 24));

  return (
    <AppShell>
      <div className="landing_page__banner">
        <img src="/images/background-1.jpg" alt="landing page banner image" />
        <div className="overlay">
          <div className="overlay__caption">
            <Title>Be part of the movement to protect children</Title>
            <p>
              Join us for a walk in solidarity on the <strong>18</strong>
              <sup>th</sup> of November
            </p>
            <p>{totalDaysLeft} days to walk</p>
            <Button type="primary" style={{ marginTop: 25 }} className="get_started__btn">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default HomePage;
