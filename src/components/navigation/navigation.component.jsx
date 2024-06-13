import React from "react";
import { BurgerMenu } from "../burger-menu/burger-menu.component";

import logo from "../../assets/logos/logo512.png";
import "./navigation.component.scss";

export const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="desktop-wrapper">
        <div className="logo-wrapper">
          <a href="#home">
            <img src={logo} alt="logo" width={60} height={60}/>
          </a>
        </div>
        <div className="menu-wrapper">
          <ul className="horizontal-list">
            <li><a className="link-text" href="#home">List Item 1</a></li>
            <li><a className="link-text" href="#advantages">List Item 2</a></li>
            <li><a className="link-text" href="#payment">List Item 3</a></li>
            <li><a className="link-text" href="#form">List Item 4</a></li>
          </ul>
        </div>
        <>
          <BurgerMenu />
        </>
      </div>
    </nav>
  );
};
