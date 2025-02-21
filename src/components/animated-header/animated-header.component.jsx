import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedHeader = ({ headers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 4000); // Change header every 4 seconds

    return () => clearInterval(interval);
  }, [headers.length]);

  return (
    <div className="header-container">
      <AnimatePresence mode="wait">
        <motion.h2
          key={headers[currentIndex]}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header-text"
        >
          {headers[currentIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};