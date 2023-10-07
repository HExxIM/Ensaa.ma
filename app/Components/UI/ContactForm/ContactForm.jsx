"use client";

import { useState, useEffect } from "react";
import Styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

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

  const finishSubmit = () => {
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_nd4xmf8";
    const templateId = "template_vgi8tak";
    const publicKey = "U8ihL4ObRinNhluBw";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "ADE",
      message: text,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setInputFields({ name: "", email: "", text: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
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
          value={inputFields.name}
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
          value={inputFields.email}
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
          value={inputFields.text}
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
        <span className={Styles.success}>Thank you for your message!</span>
      )}
    </form>
  );
}
