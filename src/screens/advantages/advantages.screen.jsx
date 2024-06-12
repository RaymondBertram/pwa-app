import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logos/logo512.png";
import "./advantages.screen.scss";
import { Card } from "../../components/cards/cards.component";

export const Advantages = () => {
  const cards = [
    {
      title: "Eliminate chargebacks",
      text: "Eliminate credit card chargebacks with open banking.",
      img: logo,
    },
    {
      title: "Reduce cost",
      text: "3x times less expensive than credit cards.",
      img: logo,
    },
    {
      title: "Instant settlements",
      text: "Payments are settled instantly into your bank account..",
      img: logo,
    },
  ];

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const cardStyle = {
    imageStyle: {
      "marginBottom": "36px",
      "width": "60px",
      "height": "60px",
    },
    containerStyle: {
      "backgroundColor": "#a9cecc",
      "borderRadius": "16px",
      "padding": "8px",
      "marginBottom": "16px",
      "width": "100%",

    },
    headerStyle: {
      "marginBottom": '8px',
      "fontSize": '40px',
      "lineHeight": "1.3",
    },
    textStyle: {
      "fontSize": "16px",
      "lineHeight": "1.3",
    },
  }

 return (
    <div className="advantages-container">
      <div className="advantages-card">
        <motion.div 
          initial={"hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={variants}
          className="card-content-left">
          {cards.map((el) => {
            return (
              <Card
                key={el.title}
                title={el.title}
                text={el.text}
                img={el.img}
                style={cardStyle}
              />
            );
          })}
        </motion.div>
        <div className="card-content-right">
          <div className="card-content-text">
            <h1 className="advantages-header">Tired of paying high Card fees?</h1>
            <p className="advantages-paragraph">Join payments evolution with us. Accept bank payments that are settled in seconds.</p>
          </div>
          <div >
            <img className="card-content-image" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      
    </div>
 );
};