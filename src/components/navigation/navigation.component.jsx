import React from "react";

import logo from "../../assets/logos/logo512.png";
import "./navigation.component.scss";

export const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="desktop-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" width={60} height={60}/>

        </div>
        <div className="menu-wrapper">
          <ul className="horizontal-list">
            <li>List Item 1</li>
            <li>List Item 2</li>
          </ul>
        </div>
      </div>
      <div className="mobile-wrapper">

      </div>
    </nav>
  );
};
