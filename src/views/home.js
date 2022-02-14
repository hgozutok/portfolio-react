import React from "react";

import { Helmet } from "react-helmet";

import NavbarContainer from "../components/navbar-container";
import AppComponent from "../components/component";
import Experience from "../components/experience";
import Portfolio from "../components/portfolio";
import SectionSeparator from "../components/section-separator";
import Contact from "../components/contact";
import FooterContainer from "../components/footer-container";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Helmet>
        <title>Portfolio Page1</title>
        <meta property="og:title" content="Huseyin GOZUTOK Portfolio Page" />
      </Helmet>
      <NavbarContainer></NavbarContainer>
      <div className={styles["section-separator"]}></div>
      <div className={styles["section-separator1"]}></div>
      <AppComponent></AppComponent>
      <Experience></Experience>
      <div className={styles["section-separator2"]}></div>
      <Portfolio></Portfolio>
      <div className={styles["section-separator3"]}></div>
      <div className={styles["section-separator4"]}></div>
      <SectionSeparator></SectionSeparator>
      <Contact></Contact>
      <div className={styles["section-separator5"]}></div>
      <FooterContainer></FooterContainer>
    </div>
  );
};

export default Home;
