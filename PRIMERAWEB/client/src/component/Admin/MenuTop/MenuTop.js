import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { logout } from "../../../api/auth";

import "./MenuTop.scss";
import JorLogo from "../../../assets/img/png/logobanner1.png";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu.top__left">
        <Link to={"/admin"}>
          <img
            className="menu-top__left-logo"
            src={JorLogo}
            alt="Jorge Emanuel Dominguez"
          ></img>
        </Link>
        <Button type="Link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuOutlined /> : <MenuUnfoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__rigth">
        <button type="Link" onClick={logoutUser}>
          <PoweroffOutlined />
        </button>
      </div>
    </div>
  );
}
