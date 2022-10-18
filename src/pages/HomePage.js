import React from "react";
import { AppShell } from "../components";
import "../styles/home-page.style.scss";
import { Button, Typography, Card } from "antd";
const { Title } = Typography;

const HomePage = () => {
  const eitheenNov = new Date("11/18/2022");
  const now = new Date();
  const diff = eitheenNov.getTime() - now.getTime();
  const totalDaysLeft = Math.ceil(diff / (1000 * 3600 * 24));

  return (
    <AppShell>
      {/* banner section */}
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
            <Button
              type="primary"
              style={{ marginTop: 25 }}
              className="get_started__btn"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>

      <div className="hero_section" style={{ marginTop: 40 }}>
        <div>
          {/* <Title>Make your steps count</Title> */}
          {/* Hero section */}
          <div className="hero_section__one">
            {/* <img src="/images/wave.png" alt="" /> */}
          </div>
          <div className="hero_section__two">
            {/* <img src="/images/wave.png" alt="" /> */}
          </div>
        </div>
        <Card
          className="world_map"
          title={
            <h2
              style={{
                background: "#a9b8d1",
                padding: ".5rem 1rem",
                textAlign: "center",
                color: "#232a3c",
              }}
            >
              Make your steps count
            </h2>
          }
          cover={<img alt="example" src="/images/map-2.png" />}
        />
      </div>
    </AppShell>
  );
};

export default HomePage;
