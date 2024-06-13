import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logos/logo512.png";
import "./advantages.screen.scss";
import { Card } from "../../components/cards/cards.component";

export const Advantages = () => {
  const cards = [
    {
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing.",
      img: logo,
    },
    {
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing.",
      img: logo,
    },
    {
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing.",
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
    <section className="advantages-container" id="advantages">
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
            <h1 className="advantages-header">Lorem ipsum dolor <span className="advantages-header-underlined">sit amet</span></h1>
            <p className="advantages-paragraph">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
          </div>
          <div >
            <img className="card-content-image" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      
    </section>
 );
};