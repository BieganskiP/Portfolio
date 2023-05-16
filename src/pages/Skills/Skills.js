import React from "react";
import css from "./Skills.module.css";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";

export default function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const skillsWithIcons = [
    { index: "1", name: "HTML5", icon: "devicon-html5-plain" },
    { index: "2", name: "CSS3", icon: "devicon-css3-plain" },
    { index: "3", name: "SASS", icon: "devicon-sass-plain" },
    { index: "4", name: "Tailwind", icon: "devicon-tailwindcss-plain" },
    { index: "5", name: "React", icon: "devicon-react-original" },
    { index: "6", name: "React Redux", icon: "devicon-redux-original" },
    { index: "7", name: "NextJs", icon: "devicon-nextjs-original" },
    { index: "8", name: "NodeJS", icon: "devicon-nodejs-plain" },
    { index: "9", name: "Express", icon: "devicon-express-original" },
    { index: "10", name: "MongoDB", icon: "devicon-mongodb-plain" },
    { index: "11", name: "Webpack", icon: "devicon-webpack-plain" },
    { index: "12", name: "GitHub", icon: "devicon-github-original" },
  ];

  return (
    <div className={css.container}>
      <h2 className={css.header}>Technologies I use</h2>
      {isMobile ? (
        <div className={css.gridContainer}>
          {skillsWithIcons.map((skill) => (
            <div key={skill.index} className={css.skillItem}>
              <i className={`${skill.icon} ${css.skillIcon}`} /> {skill.name}
            </div>
          ))}
        </div>
      ) : (
        <>
          <Marquee className={css.skillsList} pauseOnHover="true" speed="50">
            {skillsWithIcons.map((skill) => (
              <div key={skill.index} className={css.skillItem}>
                <i className={`${skill.icon} ${css.skillIcon}`} /> {skill.name}
              </div>
            ))}
          </Marquee>
          <Marquee
            className={css.skillsList}
            pauseOnHover="true"
            speed="50"
            direction="right"
          >
            {skillsWithIcons.map((skill) => (
              <div key={skill.index} className={css.skillItem}>
                <i className={`${skill.icon} ${css.skillIcon}`} /> {skill.name}
              </div>
            ))}
          </Marquee>
        </>
      )}
    </div>
  );
}
