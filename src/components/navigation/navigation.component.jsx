import React, { useState, useEffect } from "react";
import { BurgerMenu } from "../burger-menu/burger-menu.component";

import logo from "../../assets/logos/logo512.png";
import "./navigation.component.scss";

export const Navigation = () => {
  const [pos, setPos] = useState(1);

  useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 200){
           setPos(0)
        } else {
           setPos(1)
        }
    })
  },[])

  return (
    <nav className="navigation-container" style={{ opacity: pos, transition: "visibility 0s 1s, opacity 1s linear" }}>
      <div className="desktop-wrapper">
        <div className="logo-wrapper">
          <a href="#home">
            <img src={logo} alt="logo" width={60} height={60}/>
          </a>
        </div>
        <div className="menu-wrapper">
          <ul className="horizontal-list">
            <li><a className="link-text" href="#home">List Item 1</a></li>
            <li><a className="link-text" href="#form">List Item 2</a></li>
          </ul>
        </div>
        <>
          <BurgerMenu />
        </>
      </div>
    </nav>
  );
};
