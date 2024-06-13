import React from "react";
import { Slider } from "../../components/carousel/carousel.component";
import { AnimatedHeader } from "../../components/animated-header/animated-header.component";

import logo from "../../assets/logos/logo512.png";
import "./home.screen.scss";

export const HomeScreen = () => {
  const headers = ["Gestalte", "Baue", "Modifiziere", "Innoviere"];

  return (
    <section className="homescreen-container" id="home">
      <div className="hero-parent">
        <div className="hero-text-block">
          <AnimatedHeader headers={headers}/>
          <h2  className="header-text-constant">Dein <span className="underlined-h2">Produkt</span></h2>
          <p className="home-info-paragraph">Our advanced technology and secure systems provide a safe and reliable way to transfer funds, allowing you to benefit from reduced processing times and improved efficiency.</p>
        </div>
        <div className="hero-image-block">
          <img className="hero-image" src={logo} height={300} width={300} alt="hero_logo"/>
        </div>
      </div>
      <div className="home-slider">
        <div className="marquee-text">
          <p>Trusted by 2000+ Banks, 19 Countries and counting</p>
        </div>
        <div className="marquee-slider">
          <Slider />
        </div>
      </div>
    </section>
  );
};
