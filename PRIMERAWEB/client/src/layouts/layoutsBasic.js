import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h1>Menu Home</h1>
      <Layout>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer> Jorge Dominugez </Footer>
      </Layout>
    </Layout>
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
