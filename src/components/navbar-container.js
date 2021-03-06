import React from "react";

import PropTypes from "prop-types";

import projectStyles from "../style.module.css";
import styles from "./navbar-container.module.css";

const NavbarContainer = (props) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);

    // const mobileMenu = document.getElementById("mobile-menu");
    // mobileMenu.classList.add(styles["mobile-menu-open"]);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);

    // const mobileMenu = document.getElementById("mobile-menu");
    // mobileMenu.classList.remove(styles["mobile-menu-open"]);
  };

  return (
    <div data-role="Header" className={styles["navbar-container"]}>
      <div className={styles["navbar"]}>
        <span
          className={` ${projectStyles["card-Heading"]} ${styles["Heading"]} `}
        >
          {props.Heading}
        </span>
        <div className={styles["links-container"]}>
          <a
            href="#about"
            className={` ${styles["link"]} ${projectStyles["navbar-Link"]} `}
          >
            {props.link}
          </a>
          <a
            href="#experience"
            className={` ${styles["link1"]} ${projectStyles["navbar-Link"]} `}
          >
            {props.link1}
          </a>
          <a
            href="#portfolio"
            className={` ${styles["link2"]} ${projectStyles["navbar-Link"]} `}
          >
            {props.link2}
          </a>
          <a href="#contact" className={projectStyles["navbar-Link"]}>
            {props.link3}
          </a>
        </div>
        <div
          onClick={openMobileMenu}
          data-type="BurgerMenu"
          className={styles["burger-menu"]}
        >
          <svg viewBox="0 0 1024 1024" className={styles["icon"]}>
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
        <div
          data-type="MobileMenu"
          className={
            mobileMenu === true
              ? styles["mobile-menu-open"]
              : styles["mobile-menu"]
          }
        >
          <div className={styles["container"]}>
            <span
              className={` ${projectStyles["card-Heading"]} ${styles["Heading1"]} `}
            >
              {props.Heading1}
            </span>
            <div
              onClick={closeMobileMenu}
              data-type="CloseMobileMenu"
              className={styles["CloseMenu"]}
            >
              <svg viewBox="0 0 1024 1024" className={styles["icon2"]}>
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className={styles["links-container1"]}>
            <a
              href="#about"
              className={` ${styles["link"]} ${projectStyles["navbar-Link"]} `}
            >
              {props.link}
            </a>
            <a
              href="#experience"
              className={` ${styles["link1"]} ${projectStyles["navbar-Link"]} `}
            >
              {props.link1}
            </a>
            <a
              href="#portfolio"
              className={` ${styles["link2"]} ${projectStyles["navbar-Link"]} `}
            >
              {props.link2}
            </a>
            <a href="#contact" className={projectStyles["navbar-Link"]}>
              {props.link3}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

NavbarContainer.defaultProps = {
  link3: "Contact",
  link: "About",
  link7: "Contact",
  link6: "Portofolio",
  link2: "Portofolio",
  Heading: "Huseyin GOZUTOK",
  Heading1: "Hugo",
  link1: "Experience",
  link4: "About",
  link5: "Experience",
};

NavbarContainer.propTypes = {
  link3: PropTypes.string,
  link: PropTypes.string,
  link7: PropTypes.string,
  link6: PropTypes.string,
  link2: PropTypes.string,
  Heading: PropTypes.string,
  Heading1: PropTypes.string,
  link1: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
};

export default NavbarContainer;
