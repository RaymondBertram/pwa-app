import React from "react";
import { BigCards } from "../../components/cards/big-cards.component";

import logo from '../../assets/logos/logo512.png';
import './solution.screen.scss';

export const Solution = () => {
  const cardsData = [
    {
      h1Title: "Lorem ipsum dolor sit amet",
      h2Title: "Lorem ipsum dolor sit amet,",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
      img: logo,
      color: "rgb(223, 209, 244)",
    },
    {
      h1Title: "Lorem ipsum dolor sit amet",
      h2Title: "Lorem ipsum dolor sit amet,",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
      img: logo,
      color: "rgb(223, 201, 192)",
    },
    {
      h1Title: "Lorem ipsum dolor sit amet",
      h2Title: "Lorem ipsum dolor sit amet,",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
      img: logo,
      color: "rgb(223, 243, 246)",
    },
  ];

  return (
    <section className="solution-container" id="solution">
      <div className="solution-card-container">
        {cardsData.map((card, index) => <BigCards key={index} h1={card.h1Title} h2={card.h2Title} text={card.text} color={card.color} img={card.img} i={index}/>)}
      </div>
    </section>
  )
};