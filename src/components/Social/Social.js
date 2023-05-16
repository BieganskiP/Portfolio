import React, { useState, useEffect } from "react";
import css from "./Social.module.css";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 770px)" });

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${css.wrapper} ${isActive ? css.active : ""}`}>
      <button className={css.button} onClick={toggleActive}>
        <FontAwesomeIcon icon={faAddressBook} size="2xl" />
      </button>
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
        <a href="mailto:bieganski1996@gmail.com" className={css.email}>
          BIEGANSKI1996@GMAIL.COM
        </a>
      </div>
      {isMobile && (
        <button className={css.button} onClick={toggleActive}>
          <FontAwesomeIcon icon={faArrowDown} className={css.icon} />
        </button>
      )}
    </div>
  );
}
