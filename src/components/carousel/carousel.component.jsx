import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logos/logo512.png"
import "./carousel.component.scss";

export const Slider = () => {
  const variants = {
    animate: {
      x: ['50%', '0%', '-50%'], // Animation steps
      transition: {
        x: {
          repeat: Infinity,
          duration: 15,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="slider-container">
      <motion.div
        variants={variants}
        animate="animate"
        style={{ display: "flex"}}
      >
        <div className="slide">
          <img src={logo} alt="logo" width={60} height={60} />
        </div>
        <div className="slide">
          <img src={logo} alt="logo" width={60} height={60} />
        </div>
        <div className="slide">
          <img src={logo} alt="logo" width={60} height={60} />
        </div>
        <div className="slide">
         <img src={logo} alt="logo" width={60} height={60} />
        </div>
      </motion.div>
    </div>
  );
};