import React from "react";
import css from "./Contacts.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contacts() {
  return (
    <div className={css.container}>
      <ContactForm />
    </div>
  );
}
