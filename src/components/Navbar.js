import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { items } = props;
  const [activeItem, setActiveItem] = useState(items[0]);

  const handleMenuItemClick = (newActiveNum) => {
    setActiveItem(items[newActiveNum]);
  };

  return (
    <ul className="navbar">
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
  );
};

export default Navbar;
