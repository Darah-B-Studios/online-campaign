import React from "react";
import { MenuOutlined, HomeOutlined, CodeOutlined, GiftOutlined, FileTextOutlined, RocketOutlined, MessageOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useMenuContext } from "../../contexts/MenuContext";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
const items = [
    {
        label: 'Home',
        key: ROUTES.HOME,
        icon: <HomeOutlined />,
    },
    {
        label: 'Service',
        key: ROUTES.SERVICES,
        icon: <GiftOutlined />,
    },
    {
        label: 'Blog',
        key: ROUTES.BLOG,
        icon: <FileTextOutlined />,
    },
    {
        label: 'Bootcamp',
        key: ROUTES.BOOTCAMP,
        icon: <CodeOutlined />,
    },
    {
        label: 'About',
        key: ROUTES.ABOUT,
        icon: <RocketOutlined />,
    },
    {
        label: 'Contact',
        key: ROUTES.CONTACT,
        icon: <MessageOutlined />,
    },
];

const NavLinks = (props) => {
    const { currentMenu, setCurrentMenu } = useMenuContext()
    const navigate = useNavigate();

    const handleClick = (event) => {
        setCurrentMenu(event.key)
        navigate(event.key)
    }

    return (
        <Menu
            {...props}
            theme="light"
            mode="horizontal"
            onClick={handleClick}
            defaultSelectedKeys={[currentMenu]}
            items={items}
            overflowedIndicator={<MenuOutlined />}
        />
    )
}

export default NavLinks
