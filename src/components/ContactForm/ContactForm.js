import React, { useState } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError("Please fill in all the fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://polar-hamlet-46572.herokuapp.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setFormError("");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </label>
      <br />
      {formError && <p>{formError}</p>}
      <button type="submit">Send Message</button>
    </form>
  );
}
