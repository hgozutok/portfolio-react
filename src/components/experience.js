import React from "react";

import PropTypes from "prop-types";

import projectStyles from "../style.module.css";
import styles from "./experience.module.css";

const Experience = (props) => {
  return (
    <div id="experience" className={styles["about"]}>
      <div className={styles["max-content-width-container"]}>
        <div className={styles["heading-container"]}>
          <h1
            className={` ${projectStyles["section-Heading"]} ${styles["text"]} `}
          >
            {props.heading}
          </h1>
        </div>
        <div className={styles["content-container"]}>
          <div className={styles["about-1"]}>
            <div className={styles["container"]}>
              <svg viewBox="0 0 1024 1024" className={styles["icon"]}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles["text1"]} ${projectStyles["card-Text"]} `}
              >
                {props.text}
              </span>
            </div>
            <div className={styles["container1"]}>
              <svg viewBox="0 0 1024 1024" className={styles["icon02"]}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles["text2"]} ${projectStyles["card-Text"]} `}
              >
                {props.text1}
              </span>
            </div>
            <div className={styles["container2"]}>
              <svg viewBox="0 0 1024 1024" className={styles["icon04"]}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles["text3"]} ${projectStyles["card-Text"]} `}
              >
                {props.text2}
              </span>
            </div>
          </div>
          <div className={styles["about-11"]}>
            <div className={styles["container3"]}>
              <svg viewBox="0 0 1024 1024" className={styles["icon06"]}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles["text4"]} ${projectStyles["card-Text"]} `}
              >
                <span>Flutter</span>
              </span>
            </div>
            <div className={styles["container4"]}>
              <svg viewBox="0 0 1024 1024" className={styles["icon08"]}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles["text6"]} ${projectStyles["card-Text"]} `}
              >
                {props.text3}
              </span>
            </div>
            <div className={styles["container5"]}>
              <svg viewBox="0 0 1024 1024" className={styles["icon10"]}>
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span
                className={` ${styles["text7"]} ${projectStyles["card-Text"]} `}
              >
                {props.text4}
              </span>
            </div>
          </div>
        </div>
        <a href="#portfolio">
          <button
            className={` ${styles["button"]} ${projectStyles["anchor"]} ${projectStyles["button"]} `}
          >
            {props.button}
          </button>
        </a>
      </div>
    </div>
  );
};

Experience.defaultProps = {
  text1: "React.js",
  button: "CHECK MY WORK",
  text: "ASP.NET Core with CSharp",
  text3: "Vue 3",
  text2: "Angular",
  text4: "TypeScript",
  heading: "Professional experience",
};

Experience.propTypes = {
  text1: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
};

export default Experience;
