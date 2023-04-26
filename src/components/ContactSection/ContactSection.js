import React from "react";

import css from "./ContactSection.module.css";
import { Link } from "react-router-dom";
export default function ContactSection() {
  return (
    <Link to="/contacts" className={css.link}>
      Get in touch
    </Link>
  );
}
