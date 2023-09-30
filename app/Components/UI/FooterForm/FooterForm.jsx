'use client'
import Styles from './FooterForm.module.css';
import { useState,useEffect,useRef } from 'react';

export default function FooterForm() {
    const [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        text: null
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if(inputValues.name){
            if (inputValues.name.length > 30) {
              errors.name = "Name too long!";
            }
        }else{
            errors.name = "Name is Required!";
        }
        if (!inputValues.email) {
          errors.email = "Invalid email address";
        }
        if (!inputValues.text ) {
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
        console.log(inputFields);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

  return (
    <>
        <form className={Styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your Name</label>
                <input value={inputFields.name} onChange={handleChange} type='text' name="name" id="name" cols="40" rows="1"></input>
                {errors.name && <span className={Styles.error}>{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Your Email</label>
                <input
                    value={inputFields.email}
                    onChange={handleChange}
                    type='email'
                    name="email"
                    id="email"
                    cols="40"
                    rows="1"
                ></input>
                {errors.email && <span className={Styles.error}>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="text">Your Text</label>
                <textarea value={inputFields.text} onChange={handleChange} name="text" id="text" cols="40" rows="5"></textarea>
                {errors.text && <span className={Styles.error}>{errors.text}</span>}
            </div>
            <button className={Styles.button} type="submit">send</button>
    </form>
    {Object.keys(errors).length === 0 && submitting ? (
            <span className="success">Successfully submitted ✓</span>
        ) : null}
  </>
  )
}
