import React from "react";
import { Slider, AnimatedHeader, SearchBar } from "../../components/";

import animationHome from "../../assets/videos/animation-home.mp4";
import "./home.screen.scss";

export const HomeScreen = () => {
  const headers = ["Gestalte", "Baue", "Modifiziere", "Innoviere"];
  const handleSearch = (query) => {
    console.log("Search query: ", query);
    // perform search
  };

  return (
    <section className="homescreen-container" id="home">
      <div className="hero-parent">
        <div className="hero-text-block">
          <AnimatedHeader headers={headers} />
          <h2 className="header-text-constant">
            Dein <span className="underlined-h2">Produkt</span>
          </h2>
          <p className="home-info-paragraph">
            Our advanced technology and secure systems provide a safe and
            reliable way to transfer funds, allowing you to benefit from reduced
            processing times and improved efficiency.
          </p>
        </div>
        <div className="hero-video-block">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={animationHome} type="video/mp4" />
            Dein Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
      </div>
      <div className="hero-search">
        <SearchBar onSearch={(searchTerm) => handleSearch(searchTerm)} />
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
