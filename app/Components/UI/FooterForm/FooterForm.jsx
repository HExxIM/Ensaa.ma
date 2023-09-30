"use client";

import { useState, useEffect } from "react";
import Styles from "./FooterForm.module.css";

export default function FooterForm() {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    text: "",
  });
  const { name, email, text } = inputFields;
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};

    if (!inputValues.name) {
      errors.name = "Name is Required!";
    } else if (inputValues.name.length > 30) {
      errors.name = "Name too long!";
    }

    if (!inputValues.email) {
      errors.email = "Email is Required!";
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Invalid email address";
    }

    if (!inputValues.text) {
      errors.text = "Please enter your message";
    }

    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputFields),
      });

      if (response.status === 200) {
        console.log("Message sent successfully");
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("There was an error sending the message", error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
        />
        {errors.name && <span className={Styles.error}>{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Your Email</label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
        />
        {errors.email && <span className={Styles.error}>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="text">Your Text</label>
        <textarea
          value={text}
          onChange={handleChange}
          name="text"
          id="text"
          cols="40"
          rows="5"
        />
        {errors.text && <span className={Styles.error}>{errors.text}</span>}
      </div>

      <button className={Styles.button} type="submit">
        send
      </button>
      {Object.keys(errors).length === 0 && submitting && (
        <span className={Styles.success}>Successfully submitted ✓</span>
      )}
    </form>
  )
}
