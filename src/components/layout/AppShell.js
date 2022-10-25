import { Layout } from "antd";
import React from "react";
import NavLinks from "./NavLinks";
import "./layout.style.scss";

const { Header, Content, Footer } = Layout;

const AppShell = ({ children }) => {
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#fff",
        }}
      >
        <div
          style={{
            width: "20rem !important",
            fontSize: "1.2rem",
            fontWeight: "500",
          }}
        >
          <span>Solidarity </span>
          <span>Walk</span>
        </div>
        <NavLinks style={{ minWidth: 0 }} className="navbar_links" />
      </Header>
      <Content
        style={{
          padding: "0 2rem",
          background: "#fff",
        }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#fff",
        }}
      >
        Ant Design &copy; Darah-B Studios
      </Footer>
    </Layout>
  );
};
export default AppShell;
