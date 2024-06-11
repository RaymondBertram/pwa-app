import React from "react";

import "./small-cards.component.scss";

export const SmallCards = ({ title, text, img, style }) => {
  const { imageStyle, containerStyle, textStyle } = style;

  return (
    <div className="small-cards-container" style={containerStyle}>
      <img src={img} alt={`${img}`} style={imageStyle} />
      <h1>{title}</h1>
      <p style={textStyle}>{text}</p>
    </div>
  );
};