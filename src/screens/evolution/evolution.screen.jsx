import React from "react";

import logo from "../../assets/logos/logo512.png";
import "./evolution.screen.scss";
import { IconGrid } from "../../components/icon-grid/icon-grid.component";

export const Evolution = () => {
  const data = [
    {
      icon: logo, 
      title: "Header Title", 
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", 
      width: 60, 
      height: 60,
    },
    {
      icon: logo, 
      title: "Header Title", 
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", 
      width: 60, 
      height: 60,
    },
    {
      icon: logo, 
      title: "Header Title", 
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", 
      width: 60, 
      height: 60,
    },
    {
      icon: logo, 
      title: "Header Title", 
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", 
      width: 60, 
      height: 60,
    },
    {
      icon: logo, 
      title: "Header Title", 
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", 
      width: 60, 
      height: 60,
    },
    {
      icon: logo, 
      title: "Header Title", 
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", 
      width: 60, 
      height: 60,
    },
  ];

  return (
    <div className="evolution-container">
      <div className="evolution-header">
        <h1 className="evolution-header-h1">Header Title as an Example</h1>
      </div>
      <div className="evolution-grid">
        {data.map((item, index) => <IconGrid key={index} icon={item.icon} title={item.title} description={item.description} width={item.width} height={item.height} />)}
      </div>
    </div>
  )
};
