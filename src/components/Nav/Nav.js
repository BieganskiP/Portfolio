import React from "react";
import css from "./Nav.module.css";

import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <>
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
    </>
  );
}
