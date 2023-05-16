import React from "react";
import css from "./ProjectsCarousel.module.css";

import { Carousel } from "react-responsive-carousel";
import data from "../../data/projectsData.json";

export default function ProjectsCarousel() {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {data.map((project) => (
        <div key={project.title} className={css.container}>
          <h3 className={css.title}>{project.title}</h3>
          <div className={css.section}>
            <p>{project.description}</p>

            <img src={project.src} alt={project.title} className={css.image} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
