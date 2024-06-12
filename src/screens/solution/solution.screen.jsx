import React from "react";
import { BigCards } from "../../components/cards/big-cards.component";

import logo from '../../assets/logos/logo512.png';
import './solution.screen.scss';

export const Solution = () => {
  const cardsData = [
    {
      h1Title: "Turnkey API solution designed to scale your business",
      h2Title: "Built in mind for developers",
      text: "Go from idea to implementation quickly with robust, bank-grade APIs. Our documentation, sample data and code snippets provide developers with powerful tools to launch your next innovation.",
      img: logo,
      color: "rgb(223, 209, 244)",
    },
    {
      h1Title: "Turnkey API solution designed to scale your business",
      h2Title: "Built in mind for developers",
      text: "Go from idea to implementation quickly with robust, bank-grade APIs. Our documentation, sample data and code snippets provide developers with powerful tools to launch your next innovation.",
      img: logo,
      color: "rgb(223, 201, 192)",
    },
    {
      h1Title: "Turnkey API solution designed to scale your business",
      h2Title: "Built in mind for developers",
      text: "Go from idea to implementation quickly with robust, bank-grade APIs. Our documentation, sample data and code snippets provide developers with powerful tools to launch your next innovation.",
      img: logo,
      color: "rgb(223, 243, 246)",
    },
  ];

  return (
    <div className="solution-container">
      <div className="solution-card-container">
        {cardsData.map((card, index) => <BigCards key={index} h1={card.h1Title} h2={card.h2Title} text={card.text} color={card.color} img={card.img} i={index}/>)}
      </div>
    </div>
  )
};