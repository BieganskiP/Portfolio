import React from "react";
import { useMediaQuery } from "react-responsive";
import css from "./HomePage.module.css";

export default function HomePage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleDownload = () => {
    const githubRawUrl =
      "https://raw.githubusercontent.com/BieganskiP/portfolio/master/public/images/Patryk_Bieganski_Fullstack.pdf";

    const link = document.createElement("a");

    link.href = githubRawUrl;

    link.download = "Patryk_Bieganski_Fullstack.pdf";

    link.click();
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Hi, I'm Patryk.</h1>
      <p className={css.text}>
        Crafting minimalistic and sleek digital experiences.
      </p>
      <p className={css.text}>Let's transform your ideas into reality.</p>
      <div className={css.buttons}>
        <button className={css.cta} onClick={handleDownload}>
          Looking to hire?
        </button>
        <a href="#projects" className={css.cta}>
          Need a freelancer?
        </a>
      </div>
      {isMobile && (
        <div className={css.swipeContainer}>
          <p className={css.swipeText}>Swipe left to see more</p>
          <div className={css.arrow}></div>
        </div>
      )}
    </div>
  );
}
