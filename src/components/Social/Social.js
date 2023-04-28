import React from "react";
import css from "./Social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <>
      <a href="https://github.com/BieganskiP" className={css.link}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/patrykbieganski/"
        className={css.link}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </>
  );
}
