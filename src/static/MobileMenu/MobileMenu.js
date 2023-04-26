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
      <ul>
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={location.pathname === "/" ? css.active : ""}
          >
            Strona Główna
          </Link>
        </li>
      </ul>
    </div>
  );
}
