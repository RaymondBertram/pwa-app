import React, { useState, useEffect} from "react";

import "./animated-header.component.scss";

export const AnimatedHeader = ({ headers }) => {
  const [currentHeader, setCurrentHeader] = useState(headers[0]);
  const [nextHeader, setNextHeader] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextHeader(true);
      setTimeout(() => {
        setCurrentHeader(prevHeader => {
          const currentIndex = headers.indexOf(prevHeader);
          const nextIndex = (currentIndex + 1) % headers.length;
          
          return headers[nextIndex];
        });
        setNextHeader(false);
      }, 4000); // Delay the change of header
    }, 4000); // Change header every 6 seconds

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h2 className={`header-text ${nextHeader ? 'next' : ''}`}>{currentHeader}</h2>
  );
};