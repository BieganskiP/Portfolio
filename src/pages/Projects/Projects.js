import React from "react";
import css from "./Projects.module.css";

import ProjectsCarousel from "../../components/Carousel/ProjectsCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  return (
    <div className={css.container}>
      <ProjectsCarousel />
    </div>
  );
}
