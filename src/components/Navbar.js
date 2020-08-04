import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavbarItems } from "../js/data";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(NavbarItems[0]);
  const [showHammy, setShowHammy] = useState(false);

  const handleMenuItemClick = (newActiveNum) => {
    setActiveItem(NavbarItems[newActiveNum]);
  };

  const toggleHamburgerMenu = () => {
    setShowHammy(!showHammy);
  };

  return (
    <nav className="main-nav">
      <div className="hamburger-menu-container" onClick={toggleHamburgerMenu}>
        <div className={`hamburger-menu${showHammy ? " close-btn" : ""}`}></div>
      </div>

      <ul className={`navbar${showHammy ? " show-menu" : ""}`}>
        {NavbarItems.map((item, index) => (
          <li
            className={`nav-item item-${index}${
              activeItem === item ? " active" : ""
            }`}
            onClick={() => {
              handleMenuItemClick(index);
            }}
            key={index}
          >
            <span className="item-content">{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
