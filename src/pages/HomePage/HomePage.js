import React from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  const handleDownload = () => {
    const githubRawUrl =
      "https://raw.githubusercontent.com/BieganskiP/portfolio/master/public/images/Patryk_Bieganski_Frontend-developer.pdf";

    const link = document.createElement("a");

    link.href = githubRawUrl;

    link.download = "Patryk_Bieganski_Frontend-developer.pdf";

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
          Download from GitHub
        </button>
        <a href="#projects" className={css.cta}>
          Need a freelancer?
        </a>
      </div>
    </div>
  );
}
