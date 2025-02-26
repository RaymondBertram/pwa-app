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
    <section
      className="flex flex-col justify-start items-start py-5 h-fit lg:items-center"
      id="home"
    >
      <div className="flex flex-col items-center pt-4 mb-12 md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="hero-text-block">
          <AnimatedHeader headers={headers} />
          <h2 className="header-text-constant">
            Dein <span className="underlined-h2">Produkt</span>
          </h2>
          <p className="home-info-paragraph">
            Willkommen bei [Name der Firma], Ihrem zuverlässigen Partner für
            moderne und effiziente Verkehrsüberwachung. Mit innovativer
            Technologie und präzisen Analysen sorgen wir dafür, dass Straßen
            sicherer, Verkehrsflüsse optimiert und Regelverstöße transparent
            dokumentiert werden.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[500px] h-auto object-cover rounded-[20px]"
          >
            <source src={animationHome} type="video/mp4" />
            Dein Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
      </div>
      <div className="w-full h-full flex">
        <SearchBar onSearch={(searchTerm) => handleSearch(searchTerm)} />
      </div>
      <div className="flex items-center w-full px-4 py-5 md:px-5 lg:px-6">
        <div className="">
          <p>Trusted by 2000+ Banks, 19 Countries and counting</p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row w-full">
          <Slider />
        </div>
      </div>
    </section>
  );
};
