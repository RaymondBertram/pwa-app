import React from "react";
import { Card } from "../../components/cards/cards.component";

import arrrow from "../../assets/icons/arrow.svg";
import logo from "./../../assets/logos/logo512.png";
import "./processdiagram.screen.scss";

export const ProcessDiagramScreen = () => {
  const styleWhiteCards = {
    imageStyle: {
      "width": '60px',
      "height": '60px',
      "marginBottom": ".5em",
    },
    containerStyle: {
      "backgroundColor": "white",
      "flexDirection": "column",
      "justifyContent": "space-between",
      "alignItems": "center",
      "height": "9.2em",
      "width": "9.2em",
      "marginBottom": "1.75em",
      "padding": "1.75em",
      "display": "flex",
      "boxShadow": "0 4px 40px #1f29331f",
    }
  };

  const styleBlackCards = {
    imageStyle: {
      "width": '60px',
      "height": '60px',
      "marginBottom": ".5em",
    },
    containerStyle: {
      "backgroundColor": "rgb(31, 41, 51)",
      "borderRadius": "16px",
      "flexDirection": "column",
      "justifyContent": "space-between",
      "alignItems": "center",
      "height": "9.2em",
      "width": "9.2em",
      "marginBottom": "1.75em",
      "padding": "1.75em",
      "display": "flex",
      "boxShadow": "0 4px 40px #1f29331f",
    },
    textStyle: {
      "color": "white",
    }
  }

  /*  Make here some improvements */

  return (
    <section className="process-diagram-container" id="process-diagram">
      <div className="process-diagram-text-area">
        <h1 className="process-diagram-header">Lorem ipsum dolor sit</h1>
      </div>
      <div className="process-diagram-grid-area">
        <div className="process-diagram-left">
          <Card style={styleWhiteCards} img={logo} text={'Title Logo'}/>
          <Card style={styleWhiteCards} img={logo} text={'Title Logo'}/>
        </div>
        <div className="process-arrow">
          <img src={arrrow} alt="arrow" />
        </div>
        <div className="process-diagram-middle">
          <Card style={styleBlackCards} img={logo} text={'Title Logo'}/>
        </div>
        <div className="process-arrow">
          <img src={arrrow} alt="arrow" />
        </div>
        <div className="process-diagram-right">
          <Card style={styleWhiteCards} img={logo} text={'Title Logo'}/>
          <Card style={styleWhiteCards} img={logo} text={'Title Logo'}/>
        </div>
      </div>
    </section>
  )
};