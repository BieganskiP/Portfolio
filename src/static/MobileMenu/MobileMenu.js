import React from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./MobileMenu.module.css";
import { Link, useLocation } from "react-router-dom";
import { toggleMenu } from "../../redux/reducers/hamburgerSlice";
import { useMediaQuery } from "react-responsive";

export default function MobileMenu() {
  const isActive = useSelector((state) => state.hamburger.isActive);
  const openClass = isActive ? css.open : "";
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLinkClick = () => {
    dispatch(toggleMenu());
  };

  const isDesktop = useMediaQuery({ minWidth: 769 });
  React.useEffect(() => {
    if (isDesktop && isActive) {
      dispatch(toggleMenu(false));
    }
  }, [dispatch, isDesktop, isActive]);

  return (
    <div className={`${css.menu} ${openClass}`}>
      <Link
        to="/"
        onClick={handleLinkClick}
        className={location.pathname === "/" ? css.active : ""}
      >
        Home Page
      </Link>
      <Link
        to="/about"
        onClick={handleLinkClick}
        className={location.pathname === "/about" ? css.active : ""}
      >
        About me
      </Link>
      <Link
        to="/projects"
        onClick={handleLinkClick}
        className={location.pathname === "/projects" ? css.active : ""}
      >
        Projects
      </Link>
      <Link
        to="/Contacts"
        onClick={handleLinkClick}
        className={location.pathname === "/Contacts" ? css.active : ""}
      >
        Contacts
      </Link>
    </div>
  );
}
