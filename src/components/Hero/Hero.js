import React, { useEffect, useRef } from "react";
import css from "./Hero.module.css";

export default function Hero() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      if (textRef1.current) {
        textRef1.current.innerText = textRef1.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return textRef1.current.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= textRef1.current.dataset.value.length) {
          clearInterval(interval);
        }
      }

      iteration += 1 / 3;
    }, 30);
  }, []);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      if (textRef2.current) {
        textRef2.current.innerText = textRef2.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return textRef2.current.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= textRef2.current.dataset.value.length) {
          clearInterval(interval);
        }
      }

      iteration += 1 / 3;
    }, 30);
  }, []);

  return (
    <div className={css.container}>
      <h1
        data-value="Hi, my name is Patryk."
        className={css.title}
        ref={textRef1}
      >
        Hi, my name is Patryk.
      </h1>
      <h2
        data-value="Frontend developer from Wałbrzych, Poland."
        ref={textRef2}
        className={css.subTitle}
      >
        Frontend developer from Wałbrzych, Poland.
      </h2>
    </div>
  );
}
