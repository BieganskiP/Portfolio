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
          <animated.div style={style}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.techStack ? (
              <ul>
                {item.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : null}
          </animated.div>
        ))}
      </div>
    </div>
  );
}
