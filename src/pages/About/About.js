import React from "react";
import css from "./About.module.css";

export default function About() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Hi, I'm Patryk...</h2>
      <p className={css.text}>
        a passionate Full Stack Developer based in Wałbrzych, Poland. My journey
        in the world of technology started as a self-taught developer. My
        philosophy is centered around creating interactive and powerful digital
        experiences that effectively communicate your brand's vision. I’m
        constantly exploring the latest technologies to stay at the forefront of
        the rapidly evolving digital landscape.
      </p>
      <h3 className={css.skillsTitle}>Technical Skills</h3>

      <p className={css.text}>
        When I'm not coding or learning a new technology, you can find me
        playing games or cooking.
      </p>
    </div>
  );
}
