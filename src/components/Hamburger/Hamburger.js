import React, { useEffect } from "react";

import { useMediaQuery } from "react-responsive";
import css from "./Hamburger.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/reducers/hamburgerSlice";

export default function Hamburger() {
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const isActive = useSelector((state) => state.hamburger.isActive);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  const activeClass = isActive ? css.active : "";

  useEffect(() => {
    if (!isMobile) {
      dispatch(toggleMenu(false));
    }
  }, [dispatch, isMobile]);

  if (!isMobile) {
    return null;
  }

  return (
    <div
      className={`${css.menuButton} ${activeClass} flex content-center items-center`}
      onClick={handleMenuClick}
    >
      <span className={`${css.bar}`}></span>
      <span className={`${css.bar}`}></span>
      <span className={`${css.bar}`}></span>
    </div>
  );
}
