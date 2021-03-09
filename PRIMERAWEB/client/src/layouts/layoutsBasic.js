import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import MenuTop from "../component/Web/MenuTop";
import Footer from "../component/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;

  return (
    <>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <MenuTop />
        </Col>
        <Col lg={4} />
      </Row>
      <LoadRouters routes={routes} />
      <Footer />
    </>
  );
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
