import React from "react";
import css from "./Header.module.css";

import { useMediaQuery } from "react-responsive";

import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import Social from "../../components/Social/Social";
import Hamburger from "../../components/Hamburger/Hamburger";
import ContactSection from "../../components/ContactSection/ContactSection";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 769 });

  return (
    <div className={css.container}>
      <div className={`${css.section} ${css.logo}`}>
        <Logo />
      </div>
      {!isMobile && (
        <div className={`${css.section} ${css.nav}`}>
          <Nav />
        </div>
      )}
      <div className={`${css.section} ${css.social}`}>
        <Social />
      </div>
      {!isMobile && (
        <div className={`${css.section} ${css.contact}`}>
          <ContactSection />
        </div>
      )}
      {isMobile && (
        <div className={`${css.section} ${css.hamburger}`}>
          <Hamburger />
        </div>
      )}
    </div>
  );
}
