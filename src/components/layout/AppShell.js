import { Layout } from "antd";
import React from "react";
import "./layout.style.scss";

const { Header, Content, Footer } = Layout;

const AppShell = ({ children }) => {
  return (
    <Layout className="layout dark_theme" id="layout" style={{overflow: 'hidden'}}>
      <Header
      className="dark_theme"
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        <img style={{maxWidth: '100%', height: '4rem', margin: '0 auto'}} src="images/dark_logo.png"/>
      {/* <NavLinks style={{ minWidth: 0 }} className="navbar_links" /> */}
      </Header>
      <Content
        style={{
          padding: "-9rem 2rem 0",
          background: "#fff",
        }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer
      className="dark_theme"
        style={{
          textAlign: "center",
                color: 'grey',
        }}
      >
       Designed by &copy; Darah-B Studios and LOGOTEL LLC
      </Footer>
    </Layout>
  );
};
export default AppShell;
