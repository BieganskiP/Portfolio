import React from "react";

import { Link, useLocation } from "react-router-dom";
import css from "./Nav.module.css";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="flex gap-4 ">
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
        to="/contacts"
        className={`${css.link} ${
          location.pathname === "/contacts" ? css.active : ""
        }`}
      >
        Contacts
      </Link>
      <Link
        to="/projects"
        className={`${css.link} ${
          location.pathname === "/projects" ? css.active : ""
        }`}
      >
        Projects
      </Link>
    </div>
  );
}
