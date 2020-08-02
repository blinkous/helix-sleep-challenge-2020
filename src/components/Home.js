import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const items = ["The Sofa", "Reviews", "About Us", "Showroom", "Swatches"];

  return (
    <div id="home">
      <header className="main-header">
        <img
          src="https://helixsleep-code-challenge.s3.amazonaws.com/logo.svg"
          alt="Allday"
          height="51"
          width="326"
          className="logo"
        />
        <nav className="main-nav">
          <Navbar items={items}></Navbar>
        </nav>
      </header>
    </div>
  );
};

export default Home;
