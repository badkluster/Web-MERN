import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  // console.log(location);

  return (
    <Sider className="admin-sider " collapsed={menuCollapsed}>
      <Menu
        className="menu-slider"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item className="menu-text" key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text"> Home </span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-text" key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text"> Usuarios </span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-text" key="/admin/menu">
          <Link to={"/admin/menu"}>
            <MenuOutlined />
            <span className="nav-text"> Menu </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
