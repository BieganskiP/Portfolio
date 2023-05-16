import React from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  const handleDownload = () => {
    const fileId = "YOUR_FILE_ID";

    const downloadLink = `https://drive.google.com/uc?id=${fileId}`;

    const link = document.createElement("a");

    link.href = downloadLink;

    link.download = "filename.ext";
    link.click();
  };

  return (
    <div className={css.container}>
      <h1>Hi, I'm Patryk.</h1>
      <p>Crafting minimalistic and sleek digital experiences.</p>
      <p>Let's transform your ideas into reality.</p>
      <div className={css.buttons}>
        <a href="#cv" className={css.cta} onClick={handleDownload}>
          Looking to hire?
        </a>
        <a href="#projects" className={css.cta}>
          Need a freelancer?
        </a>
      </div>
    </div>
  );
}
