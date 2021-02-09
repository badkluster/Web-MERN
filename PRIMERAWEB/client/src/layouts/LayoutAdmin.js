import React from "react";
import {Route} from "react-router-dom";
import {Layout} from "antd";

import "./LayoutAdmin.scss";


export default function LayoutAdmin (props){
    const {routes} = props;
    const {Header, Content, Footer} = Layout;

    return(
      
<Layout>
    <h1>Menu Slider Admin</h1>
    <Layout>
        <Header>header...</Header>
        <Content>
            <LoadRouters routes={routes} />
        </Content>
        <Footer> Jorge Dominugez </Footer>
    </Layout>
</Layout>
    );
}

function LoadRouters({routes}) {
    console.log(routes)
  return routes.map ((route, index) => (
    <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
    />
 ));
}