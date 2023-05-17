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
      {!isMobile ? (
        <>
          <h2 className={css.header}>Skills</h2>
          <p className={css.description}>
            In the realm of digital solutions, I bring more than just technical
            expertise. I leverage my strong communication skills and proactive
            approach to translate client needs into functional results. Known
            for my collaborative mindset and adaptability, I excel in team
            environments and readily embrace new tech trends. With a keen eye
            for detail, I ensure the delivery of polished and efficient code,
            contributing to a superior user experience.
          </p>
        </>
      ) : null}

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
        <Marquee className={css.skillsList} pauseOnHover="true" speed="50">
          {skillsWithIcons.map((skill) => (
            <div key={skill.index} className={css.skillItem}>
              <i className={`${skill.icon} ${css.skillIcon}`} /> {skill.name}
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
}
