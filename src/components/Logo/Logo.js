import React from "react";

// import logo from "../../static/Logo v2.svg";
// import css from "./Logo.module.css";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      {/* <img src={logo} alt="DevPat Logo" className={css.logo} /> */}
      PATRYK BIEGAŃSKI
    </Link>
  );
}
