import React from "react";
import FooterNav from "../../components/FooterNav/FooterNav";

import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.container}>
      <FooterNav />
    </div>
  );
}
