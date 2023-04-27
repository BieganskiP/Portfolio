import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import css from "./Projects.module.css";
import projectsData from "../../assets/data/projectsData.json";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  const handleProjectButtonClick = (project) => {
    setSelectedProject(project);
  };

  const transitions = useTransition(selectedProject, {
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    config: { duration: 500 },
    reset: true,
    key: (selectedProject) => selectedProject.id,
  });

  return (
    <div className={css.projectsGrid}>
      <div className={css.projectButtons}>
        {projectsData.map((project) => (
          <button
            key={project.id}
            className={css.projectButton}
            onClick={() => handleProjectButtonClick(project)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className={css.projectDetails}>
        {transitions((style, item) => (
          <animated.div style={style} className={css.container}>
            <h2 className={css.title}>{item.title}</h2>
            <div className={css.text}>
              <div>
                <p className={css.description}>{item.description}</p>
                <a href={item.link}>{item.title}</a>
              </div>
              <div className={css.tech}>
                <h3 className={css.techTitle}>Techologies used</h3>
                {item.techStack ? (
                  <ul className={css.techList}>
                    {item.techStack.map((tech) => (
                      <li key={tech} className={css.techItem}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className={css.imgContainer}>
              {item.src
                ? item.src.map((image) => (
                    <img src={image} key={image} alt={image} />
                  ))
                : null}
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
