import React from "react";

import PropTypes from "prop-types";

import projectStyles from "../style.module.css";
import styles from "./portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div id="portfolio" className={styles["clients"]}>
      <div className={styles["heading-container"]}>
        <h1
          className={` ${styles["text"]} ${projectStyles["section-Heading"]} `}
        >
          {props.heading}
        </h1>
        <span
          className={` ${styles["text1"]} ${projectStyles["section-Text"]} `}
        >
          {props.text}
        </span>
      </div>
      <div className={styles["logo-container"]}>
        <div className={styles["container"]}>
          <div className={styles["logo"]}>
            <span className={styles["text2"]}>{props.text1}</span>
          </div>
        </div>
        <div className={styles["logo1"]}>
          <span className={styles["text3"]}>{props.text2}</span>
        </div>
        <div className={styles["logo2"]}>
          <span className={styles["text4"]}>{props.text3}</span>
        </div>
        <div className={styles["logo3"]}>
          <span className={styles["text5"]}>{props.text31}</span>
        </div>
        <div className={styles["logo4"]}>
          <span className={styles["text6"]}>{props.text311}</span>
        </div>
      </div>
    </div>
  );
};

Portfolio.defaultProps = {
  text31: "Sales Manager",
  heading: "Portfolio",
  text3: "React Material Design",
  text311: "hugostore.uk",
  text: "",
  text1: "Food Ordering",
  text2: "Hotel Reservation",
};

Portfolio.propTypes = {
  text31: PropTypes.string,
  heading: PropTypes.string,
  text3: PropTypes.string,
  text311: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default Portfolio;
