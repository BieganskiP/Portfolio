import React from "react";
import css from "./Contacts.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contacts() {
  return (
    <div className={css.container}>
      <p className={css.text}>
        If you would like to know more about me or are interested in working
        with me, feel free to use the form below. Alternatively, you can reach
        out to me via email at{" "}
        <a href="mailto:bieganski1996@gmail.com" className={css.link}>
          bieganski1996@gmail.com
        </a>{" "}
        or through my{" "}
        <a
          className={css.link}
          href="https://www.linkedin.com/in/patrykbieganski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>
        .
      </p>

      <ContactForm />
    </div>
  );
}
