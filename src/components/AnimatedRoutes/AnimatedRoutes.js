import React, { useState, useEffect } from "react";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import css from "./AnimatedRoutes.module.css";

import { useTransition, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";

import HomePage from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Projects from "../../pages/Projects/Projects";
import Skills from "../../pages/Skills/Skills";

const pageOrder = ["/", "/about", "/projects", "/skills", "/contacts"];

function getAnimationValues(currentPath, nextPath) {
  const currentPathIndex = pageOrder.indexOf(currentPath);
  const nextPathIndex = pageOrder.indexOf(nextPath);
  const delta = nextPathIndex - currentPathIndex;

  return {
    from: { opacity: 0, transform: `translate3d(${100 * delta}%, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(${100 * -delta}%, 0, 0)` },
  };
}

export default function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    setPrevLocation(location);
  }, [location]);

  const { from, leave } = getAnimationValues(
    prevLocation.pathname,
    location.pathname
  );

  const transitions = useTransition(location, {
    from,
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave,
    keys: (location) => location.pathname,
    initial: null,
    config: { mass: 1, tension: 280, friction: 30 },
    exitBeforeEnter: true,
    onStart: ({ key }) => {
      setPrevLocation((prev) => {
        if (prev.pathname === key) {
          return location;
        }
        return prev;
      });
    },
  });

  const currentPageIndex = pageOrder.indexOf(location.pathname);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPageIndex < pageOrder.length - 1) {
        navigate(pageOrder[currentPageIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentPageIndex > 0) {
        navigate(pageOrder[currentPageIndex - 1]);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  return transitions((style, item, _, phase) => (
    <animated.div {...swipeHandlers} style={style} className={css.container}>
      <Routes location={phase === "leave" ? prevLocation : item}>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Projects />} path="/projects"></Route>
        <Route element={<Skills />} path="/skills"></Route>
        <Route element={<Contacts />} path="/contacts"></Route>
      </Routes>
    </animated.div>
  ));
}
