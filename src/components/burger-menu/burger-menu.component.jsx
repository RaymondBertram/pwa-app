import React, { useState } from "react";

import burger_menu from "../../assets/icons/burger.png";
import "./burger-menu.component.scss";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <img src={burger_menu} alt="burger-menu" className="burger-menu" width={20} height={20} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <>
          <div className="overlay" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ul className="burger-menu-list" style={{display: 'flex', flexDirection: 'column'}}>
              <li><a className="link-text-burger-menu" href="#home">List Item 1</a></li>
              <li><a className="link-text-burger-menu" href="#form">List Item 2</a></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
