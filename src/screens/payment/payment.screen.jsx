import React from "react";
import { Card } from "../../components/cards/cards.component";

import arrow from "../../assets/icons/arrow.svg";
import logo from "./../../assets/logos/logo512.png";
import "./payment.screen.scss";

export const Payment = () => {
  const styleWhiteCards = {
    imageStyle: {
      "width": '100px',
      "height": '100px',
      "marginBottom": ".5em",
    },
    containerStyle: {
      "backgroundColor": "white",
      "flexDirection": "column",
      "justifyContent": "space-between",
      "alignItems": "center",
      "height": "264px",
      "width": "264px",
      "marginBottom": "1.75em",
      "padding": "1.75em",
      "display": "flex",
      "boxShadow": "0 4px 40px #1f29331f",
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-text-area">
        <h1 className="payment-header">Lorem ipsum dolor</h1>
      </div>
      <div className="payment-card-block">
        <Card style={styleWhiteCards} img={logo} title={'Title Logo'}/>
        <div className="process-payment-arrow">
          <img src={arrow} alt="arrow" />
        </div>
        <Card style={styleWhiteCards} img={logo} title={'Title Logo'}/>
        <div className="process-payment-arrow">
          <img src={arrow} alt="arrow" />
        </div>
        <Card style={styleWhiteCards} img={logo} title={'Title Logo'}/>
      </div>
      

    </div>
  );
};