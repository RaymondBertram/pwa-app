import React from "react";
import { motion } from "framer-motion"
import { Carousel } from "bootstrap";

import logo from "../../assets/logos/logo512.png";
import "./home.screen.scss";

export const HomeScreen = () => {
  return (
    <section className="homescreen-container" id="home">
      <div className="hero-parent">
        <div className="hero-text-block">
          <h2>Swapable Header 2</h2>
          <h2>Constant Header 2</h2>
          <p className="home-info-paragraph">Our advanced technology and secure systems provide a safe and reliable way to transfer funds, allowing you to benefit from reduced processing times and improved efficiency.</p>
        </div>
        <div className="hero-image-block">
          <img className="hero-image" src={logo} height={300} width={300} alt="hero_logo"/>
        </div>
      </div>
      <div className="home-slider">
        <div className="marquee-text">
          <p>Trusted by 2000+ Banks, 19 Countries and counting ...</p>
        </div>
        <div className="marquee-slider">
        </div>
      </div>
    </section>
  );
};
