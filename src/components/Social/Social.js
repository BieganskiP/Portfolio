import React from "react";
import css from "./Social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className={css.container}>
      <a href="https://github.com/BieganskiP" className={css.link}>
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/patrykbieganski/"
        className={css.link}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>
      <a href="mailto:bieganski1996@gmail.com" className={css.email}>BIEGANSKI1996@GMAIL.COM</a>
    </div>
  );
}
