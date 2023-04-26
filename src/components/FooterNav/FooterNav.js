import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./FooterNav.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function FooterNav() {
  const location = useLocation();

  return (
    <div className={css.container}>
      <Link
        to="/"
        className={`${css.link} ${location.pathname === "/" ? css.active : ""}`}
      >
        <FontAwesomeIcon icon={faCircle} />
      </Link>
      <Link
        to="/about"
        className={`${css.link} ${
          location.pathname === "/about" ? css.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faCircle} />
      </Link>
      <Link
        to="/projects"
        className={`${css.link} ${
          location.pathname === "/projects" ? css.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faCircle} />
      </Link>
      <Link
        to="/contacts"
        className={`${css.link} ${
          location.pathname === "/contacts" ? css.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faCircle} />
      </Link>
    </div>
  );
}
