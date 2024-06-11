import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logos/logo512.png";
import "./get-started.screen.scss";
import { Card } from "../../components/cards/cards.component";

export const GetStarted = () => {
  const cards = [
    {
      img: logo,
      title: "Balance",
      text: "Verify real-time account balances.",
    },
    {
      img: logo,
      title: "Transactions",
      text: "Access detailed transaction history.",
    },
    {
      img: logo,
      title: "Bank details",
      text: "Verify users’ identities and reduce fraud.",
    },
  ];

  const cardStyle = {
    imageStyle: {
      marginBottom: "36px",
      width: "100px",
      height: "100px",
    },
    containerStyle: {
      backgroundColor: "#f1d9d0",
      borderRadius: "16px",
      padding: "8px",
      marginBottom: "16px",
      height: "30em",
      width: "20em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    headerStyle: {
      marginBottom: "8px",
      fontSize: "40px",
      lineHeight: "1.3",
    },
    textStyle: {
      fontSize: "16px",
      lineHeight: "1.3",
    },
  };

  const variants = {
    animate: {
      x: ['50%', '0%'], // Animation steps
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
};

  return (
    <div className="get-started-container">
      <div className="get-started-card">
        <div className="get-started-content-left">
          <div className="card-content-text">
            <h1 className="get-started-header">
              Unlock the power of banking data
            </h1>
          </div>
        </div>
        <div className="get-started-content-right">
          <motion.div
            className="get-started-child-right-cards"
            animate="animate"
            initial="hidden"
            variants={variants}
          >
            {cards.map((card, index) => (
              <Card
                title={card.title}
                img={card.img}
                text={card.text}
                style={cardStyle}
                key={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
