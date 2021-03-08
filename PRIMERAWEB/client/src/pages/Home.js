import React from "react";

import MainBanner from "../component/Web/MainBanner";
import HomeCourses from "../component/Web/HomeCourses";
import HowMyCoursesWork from "../component/Web/HowMyCoursesWork/HowMyCoursesWork";
import ReviewsCourses from "../component/Web/ReviewsCourses/ReviewsCourses";

export default function Home() {
  return (
    <>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
      <ReviewsCourses />
    </>
  );
}
