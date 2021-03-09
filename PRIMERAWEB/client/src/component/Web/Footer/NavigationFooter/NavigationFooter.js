import React from "react";
import { Row, Col } from "antd";

import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  RightOutlined,
  UserOutlined,
  AppstoreOutlined,
  HddOutlined,
} from "@ant-design/icons";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col md={24}>
        <h3>Navegación</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <BookOutlined className="icon-nav-nav" /> Cursos Online
        </a>
      </li>
      <li>
        <a href="#">
          <CodeOutlined className="icon-nav-nav" /> Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#">
          <DatabaseOutlined className="icon-nav-nav" /> Base de Datos
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined className="icon-nav-nav" /> Politica de Privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined className="icon-nav-nav" /> Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <AppstoreOutlined className="icon-nav-nav" /> CMS
        </a>
      </li>
      <li>
        <a href="#">
          <UserOutlined className="icon-nav-nav" /> Porfolio
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined className="icon-nav-nav" /> Política de Cookies
        </a>
      </li>
    </ul>
  );
}
