import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../component/Web/MainBanner";
import HomeCourses from "../component/Web/HomeCourses";
import HowMyCoursesWork from "../component/Web/HowMyCoursesWork/HowMyCoursesWork";
import ReviewsCourses from "../component/Web/ReviewsCourses/ReviewsCourses";

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home | Jorge Emanuel Dominguez </title>
        <meta
          name="description"
          content="Home | Web sobre programación de Jorge Emanuel Dominguez "
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
      <ReviewsCourses />
    </>
  );
}
