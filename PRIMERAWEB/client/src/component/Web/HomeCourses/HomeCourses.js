import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2> Aprende y mejor tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourses
              image={reactJsHooks}
              title="React Js Hooks"
              subtitle="Intermedio - React/JavaScript"
              link="http://courses.augstin.com"
            />
          </Col>
          <Col md={6}>
            <CardCourses
              image={reactNative}
              title="React Native Expo"
              subtitle="Intermedio - React/JavaScript"
              link="http://courses.augstin.com"
            />
          </Col>
          <Col md={6}>
            <CardCourses
              image={javaScript}
              title="JavaScript"
              subtitle="Basico - JavaScript"
              link="http://courses.augstin.com"
            />
          </Col>
          <Col md={6}>
            <CardCourses
              image={wordPress}
              title="WordPress"
              subtitle="Basico - React/JavaScript"
              link="http://courses.augstin.com"
            />
          </Col>
        </Row>

        <Row className="row-courses">
          <Col md={6}>
            <CardCourses
              image={prestaShop}
              title="Presta-Shop"
              subtitle="Intermedio - React/JavaScript"
              link="http://courses.augstin.com"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />

          <Col md={6}>
            <CardCourses
              image={cssGrid}
              title="CSS Grid"
              subtitle="Basico - React/JavaScript"
              link="http://courses.augstin.com"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourses(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noppener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} subtitle={subtitle} />
      </Card>
    </a>
  );
}
