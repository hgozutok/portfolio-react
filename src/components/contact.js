import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import PropTypes from "prop-types";

import projectStyles from "../style.module.css";
import styles from "./contact.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          // alert("Your message has been sent!");
          // console.log(result.text);
        },
        (error) => {
          toast.error("Message failed to send!");
          //  alert("Your message could not be sent. Please try again.");
          // console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles["subscribe"]}>
      <ToastContainer />
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles["image"]}
      />
      <div className={styles["container"]}>
        <div className={styles["heading-container"]}>
          <h1
            className={` ${styles["text"]} ${projectStyles["section-Heading"]} `}
          >
            {props.heading}
          </h1>
          <span
            className={` ${projectStyles["section-Text"]} ${styles["text1"]} `}
          >
            {props.text}
          </span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            required={true}
            name="user_email"
            placeholder={props.textinput_placeholder}
            className={` ${styles["textinput"]} ${projectStyles["section-Text"]} ${projectStyles["input"]} `}
          />
          <input
            type="text"
            required={true}
            name="user_name"
            placeholder={props.textinput_placeholder1}
            className={` ${styles["textinput1"]} ${projectStyles["section-Text"]} ${projectStyles["input"]} `}
          />
          <textarea
            placeholder={props.textarea_placeholder}
            name="message"
            required={true}
            className={` ${styles["textarea"]} ${projectStyles["section-Text"]} ${projectStyles["input"]} `}
          ></textarea>
          <button
            type="submit"
            className={` ${styles["button"]} ${projectStyles["anchor"]} ${projectStyles["button"]} `}
          >
            {props.button}
          </button>
        </form>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  textinput_placeholder1: "Name",
  textarea_placeholder: "Message",
  heading: "Let's get in touch..",
  textinput_placeholder: "E-mail",
  image_src:
    "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=Mnw5MTMyMXwxfDF8YWxsfDEyMXx8fHx8fDJ8fDE2NDQ4NDA3MTY&ixlib=rb-1.2.1&w=1500",
  image_alt: "image",
  text: "Simply fill out the form to contact with me.",
  button: "SEND",
};

Contact.propTypes = {
  textinput_placeholder1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
};

export default Contact;
