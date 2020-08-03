import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { matches } = props;
  const items = ["The Sofa", "Reviews", "About Us", "Showroom", "Swatches"];
  const [activeItem, setActiveItem] = useState(items[0]);
  const [showHammy, setShowHammy] = useState(false);

  const handleMenuItemClick = (newActiveNum) => {
    setActiveItem(items[newActiveNum]);
  };

  const toggleHamburgerMenu = () => {
    setShowHammy(!showHammy);
  };

  return (
    <nav className="main-nav">
      {matches && (
        <div className="hamburger-menu-container" onClick={toggleHamburgerMenu}>
          <div
            className={`hamburger-menu${showHammy ? " close-btn" : ""}`}
          ></div>
        </div>
      )}
      <ul className={`navbar${showHammy ? " show-menu" : ""}`}>
        {items.map((item, index) => (
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
