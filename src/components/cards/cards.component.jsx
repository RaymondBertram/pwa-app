import React from "react";

import "./cards.component.scss";

export const Card = ({ title, text, img, style }) => {
  const { imageStyle, containerStyle, textStyle, headerStyle } = style;

  return (
    <div className="cards-container" style={containerStyle}>
      <img src={img} alt={`${img}`} style={imageStyle} />
      <h1 style={headerStyle}>{title}</h1>
      <p style={textStyle}>{text}</p>
    </div>
  );
};