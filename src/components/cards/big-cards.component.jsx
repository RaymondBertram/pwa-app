import React from "react";

import "./big-cards-component.scss";

export const BigCards = ({ h1, h2, text, img, color, i }) => {
  return (
    <div className="big-cards-container">
      <div
        className="big-cards"
        style={{ backgroundColor: color, top: `calc(-10% + ${i * 25}px)` }}
      >
        <h1 className="big-card-header">{h1}</h1>
        <div className="big-card-block">
          <div className="big-card-block-text">
            <div className="big-card-block-h2">
              <h2>{h2}</h2>
            </div>
            <div className="big-card-block-p">
              <p>{text}</p>
            </div>
          </div>
          <div className="big-card-block-img">
            <img className="size-100 rounded" src={img} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
