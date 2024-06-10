import React from "react";

import "./cards.component.scss";

export const Cards = ({ title, text, img }) => {
    return (
        <div className="card-container">
            <img className="card-img-container" src={img} alt={`${img}`} width={60} height={60}/>
            <h1 className="card-header">{title}</h1>
            <p>{text}</p>
        </div>
    );
};