import React from "react";
import css from "./About.module.css";

export default function About() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Hi, I'm Patryk...</h2>
      <p className={css.text}>
        a self-taught Full Stack Developer based in Poland. I embarked on my
        journey in the world of technology out of a pure passion for solving
        problems and creating impactful and user-friendly digital solutions.
      </p>
      <p className={css.text}>
        My design philosophy is rooted in minimalism and sleek aesthetics, with
        the belief that simplicity is the ultimate sophistication. I have a
        knack for transforming complex ideas into elegant digital experiences.
      </p>
      <p className={css.text}>
        When I'm not behind the computer screen crafting websites and
        applications, you'll find me lost in the captivating world of video
        games, exploring different realms and adventures. I'm also an avid cook,
        always ready to experiment with new recipes and flavors in the kitchen.
      </p>
      <p className={css.text}>
        Life, for me, is all about balance - the logical with the creative, the
        complex with the simple, and the virtual with the tangible.
      </p>
      <p className={css.text}> Welcome to my world!</p>
    </div>
  );
}
