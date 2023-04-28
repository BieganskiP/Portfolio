import { Routes, Route, useLocation } from "react-router-dom";
import css from "./AnimatedRoutes.module.css";

import { useTransition, animated } from "react-spring";

import HomePage from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Projects from "../../pages/Projects/Projects";

export default function AnimatedRoutes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    keys: (location) => location.pathname,
    initial: null,
    config: { mass: 1, tension: 280, friction: 30 },
    exitBeforeEnter: true,
  });

  return transitions((style, item) => (
    <animated.div style={style} className={css.container}>
      <Routes location={item}>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Contacts />} path="/contacts"></Route>
        <Route element={<Projects />} path="/projects"></Route>
      </Routes>
    </animated.div>
  ));
}
