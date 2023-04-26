import React from "react";

import { useMediaQuery } from "react-responsive";

import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import Hamburger from "../../components/Hamburger/Hamburger";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 769 });

  return (
    <div className="flex justify-between p-6 items-center flex-wrap">
      <Logo />
      {!isMobile && <Nav />}
      {isMobile && <Hamburger />}
    </div>
  );
}
