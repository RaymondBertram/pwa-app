import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logos/logo512.png";
import "./carousel.component.scss";

export const Slider = () => {
  const variants = {
    animate: {
      x: ["100%", "-50%"], // Animation steps
      transition: {
        x: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden max-w-full lg:rounded-[64px] w-full">
      <motion.div
        variants={variants}
        animate="animate"
        style={{ display: "flex" }}
      >
        <div className="flex flex-row items-center justify-center mr-[100px] p-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row items-center justify-center mr-[100px] p-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row items-center justify-center mr-[100px] p-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row items-center justify-center mr-[100px] p-5">
          <img src={logo} alt="logo" />
        </div>
      </motion.div>
    </div>
  );
};
