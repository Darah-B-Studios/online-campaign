import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import NavLinks from './NavLinks';
const { Header, Content, Footer } = Layout;

const AppShell = ({ children }) => {
    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', justifyContent: 'space-between', background: '#fff' }}>
                <div style={{width: '20rem !important', fontSize: '1.2rem', fontWeight: '500' }}>
                    <span>Darah-B </span>
                    <span>Studios</span>
                </div>
                <NavLinks style={{minWidth: 0, flex: 'auto'}}/>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design &copy; Bless Darah
            </Footer>
        </Layout >
    );
}
export default AppShell;

