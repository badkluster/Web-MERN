import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Spin, notification } from "antd";
import { getCoursesApi } from "../api/course";
import PresentationCourses from "../component/Web/Courses/PresentationCourses/";
import CoursesList from "../component/Web/Courses/CoursesList";

export default function Courses() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    getCoursesApi()
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            messagge: response.messagge,
          });
        } else {
          setCourses(response.courses);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor, intentelo más tarde.",
        });
      });
  }, []);

  return (
    <>
      <Helmet>
        <title> Cursos | Jorge Emanuel Dominguez </title>
        <meta
          name="description"
          content="Cursos | Web sobre programación de Jorge Emanuel Dominguez "
          data-react-helmet="true"
        />
      </Helmet>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <PresentationCourses />

          {!courses ? (
            <Spin
              tip="Cargando Cursos"
              style={{ textAlign: "center", width: "100%", padding: "20px" }}
            />
          ) : (
            <CoursesList courses={courses} />
          )}
        </Col>
        <Col md={4} />
      </Row>
    </>
  );
}
