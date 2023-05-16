import React from "react";
import css from "./DecorationNav.module.css";

import { Link, useLocation } from "react-router-dom";

export default function FooterNav() {
  const location = useLocation();

  return (
    <div className={css.container}>
      <Link
        to="/"
        className={`${css.link} ${location.pathname === "/" ? css.active : ""}`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${css.link} ${
          location.pathname === "/about" ? css.active : ""
        }`}
      >
        About me
      </Link>
      <Link
        to="/projects"
        className={`${css.link} ${
          location.pathname === "/projects" ? css.active : ""
        }`}
      >
        Projects
      </Link>
      <Link
        to="/skills"
        className={`${css.link} ${
          location.pathname === "/skills" ? css.active : ""
        }`}
      >
        Skills
      </Link>
      <Link
        to="/contacts"
        className={`${css.link} ${
          location.pathname === "/contacts" ? css.active : ""
        }`}
      >
        Contacts
      </Link>
    </div>
  );
}
