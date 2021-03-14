import React from "react";
import { Helmet } from "react-helmet";
import { Row, Col } from "antd";
import Error404Logo from "../assets/img/jpg/error-404.jpg";

import "./Error404.scss";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title> Error404 | Jorge Emanuel Dominguez </title>
        <meta
          name="description"
          content="Error 404 | Web sobre programación de Jorge Emanuel Dominguez "
          data-react-helmet="true"
        />
      </Helmet>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <img src={Error404Logo} alt="Imagen error 404"></img>
        </Col>
        <Col md={4} />
      </Row>
    </>
  );
}
