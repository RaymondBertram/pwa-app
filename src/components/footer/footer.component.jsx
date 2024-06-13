import React from "react";

import logo from "../../assets/logos/logo512.png"
import "./footer.component.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-child-d">
        <div className="footer-logo-wrap">
          <img src={logo} alt="logo"  width={60} height={60} />
          <p>Copyright © 2024 Company XYZ. All rights reserved.</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-headers">About</h3>
          <ul className="footer-col-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-headers">Platform</h3>
          <ul className="footer-col-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-headers">Legal</h3>
          <ul className="footer-col-list">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  )
};
