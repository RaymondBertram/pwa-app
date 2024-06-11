import React from "react";
import { SmallCards } from "../../components/cards/small-cards.component";

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
  };

  const styleBlackCards = {
    imageStyle: {
      "width": '60px',
      "height": '60px',
      "marginBottom": ".5em",
    },
    containerStyle: {
      "backgroundColor": "rgb(31, 41, 51)",
    },
    textStyle: {
      "color": "white",
    }
  }

  return (
    <div className="process-diagram-container">
      <div className="process-diagram-text-area">
        <h1 className="process-diagram-header">One payment power grid</h1>
      </div>
      <div className="process-diagram-grid-area">
        <div className="process-diagram-left">
          <SmallCards style={styleWhiteCards} img={logo} text={'Title Logo'}/>
          <SmallCards style={styleWhiteCards} img={logo} text={'Title Logo'}/>
        </div>
        <div className="process-arrow">
            <img src={arrrow} alt="arrow" />
          </div>
        <div className="process-diagram-middle">
          <SmallCards style={styleBlackCards} img={logo} text={'Title Logo'}/>
        </div>
        <div className="process-arrow">
          <img src={arrrow} alt="arrow" />
        </div>
        <div className="process-diagram-right">
          <SmallCards style={styleWhiteCards} img={logo} text={'Title Logo'}/>
          <SmallCards style={styleWhiteCards} img={logo} text={'Title Logo'}/>
        </div>
      </div>
    </div>
  )
};