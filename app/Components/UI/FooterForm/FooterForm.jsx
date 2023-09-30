"use client";

import { useState, useEffect } from "react";
import Styles from "./FooterForm.module.css";
import FormData from "form-data";

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
        const MAILGUN_API_KEY = 'key-ac1a298a5db50cbda051c38079855468-db137ccd-67b3593b';
        const MAILGUN_DOMAIN = 'sandbox45da17f0e795445a8b5e6c34ce88b636.mailgun.org';
        const formData = new FormData();
        formData.append('from', `${inputFields.email}`);
        formData.append('to', `ensaagadirade@gmail.com`);
        formData.append('subject', `Website Contact Us - ${inputFields.name}`);
        formData.append('text', `${inputFields.text}`);
        console.log(inputFields);
        console.log(formData);
        try {
            const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
            },
            body: formData,
            });
        
            if (response.ok) {
            const data = await response.json();
            console.log('Email sent:', data);
            } else {
            const errorData = await response.json();
            console.error('Error sending email:', errorData);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
  useEffect(() => {
    const sendEmail = async () => {
        if (Object.keys(errors).length === 0 && submitting) {
          await finishSubmit(); // Wait for finishSubmit to complete
        }
      };
    
      sendEmail();
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
  )
}
