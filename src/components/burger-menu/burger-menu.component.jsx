import React, { useState } from "react";

import burger_menu from "../../assets/icons/burger.png";
import close from "../../assets/icons/close.png";
import logo from "../../assets/logos/logo512.png";
import "./burger-menu.component.scss";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <img
        src={burger_menu}
        alt="burger-menu"
        className="burger-menu"
        width={20}
        height={20}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <>
          <div className="burger-overlay" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="burger-wrapper">
              <div className="logo-wrapper">
                <a href="#home">
                  <img src={logo} alt="logo" width={60} height={60} />
                </a>
              </div>
              <div className="close-wrapper">
                <a href="#home">
                  <img src={close} alt="logo" width={20} height={20} />
                </a>
              </div>
            </div>
            <ul
              className="burger-menu-list"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <li>
                <a className="link-text-burger-menu" href="#home">
                  List Item 1
                </a>
              </li>
              <li>
                <a className="link-text-burger-menu" href="#advantages">
                  List Item 2
                </a>
              </li>
              <li>
                <a className="link-text-burger-menu" href="#process-diagram">
                  List Item 3
                </a>
              </li>
              <li>
                <a className="link-text-burger-menu" href="#get-started">
                  List Item 4
                </a>
              </li>
              <li>
                <a className="link-text-burger-menu" href="#payment">
                  List Item 5
                </a>
              </li>
              <li>
                <a className="link-text-burger-menu" href="#solution">
                  List Item 6
                </a>
              </li>
              <li>
                <a className="link-text-burger-menu" href="#evolution">
                  List Item 7
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
