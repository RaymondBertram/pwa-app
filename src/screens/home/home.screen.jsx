import React from "react";
import { motion } from "framer-motion"

import logo from "../../assets/logos/logo512.png";
import "./home.screen.scss";

export const HomeScreen = () => {
  return (
    <section className="homescreen-container">
      <div className="hero-parent">
        <div className="hero-text-block">
          <h2>Swapable Header 2</h2>
          <h2>Constant Header 2</h2>
          <p className="home-info-paragraph">Our advanced technology and secure systems provide a safe and reliable way to transfer funds, allowing you to benefit from reduced processing times and improved efficiency.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image-block">
          <img src={logo} height={300} width={300} alt="hero_logo"/>
        </div>
      </div>
    </section>
  );
};
