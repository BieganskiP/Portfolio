import React from "react";
import css from "./ContactSection.module.css";
import { Link, useLocation } from "react-router-dom";

export default function ContactSection() {
  const location = useLocation();

  return (
    <Link
      className={`${css.link} ${
        location.pathname === "/contacts" ? css.active : ""
      }`}
      to="/contacts"
    >
      Get in touch
    </Link>
  );
}
