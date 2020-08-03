import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";
import { ProductOptions, IconOptions, Logo } from "../js/data";

const Home = () => {
  const mediaQuery = "(max-width: 1024px)";
  const [mediaMatches, setMediaMatches] = useState(
    window.matchMedia(mediaQuery).matches
  );

  const handleMediaMatchChange = ({ matches }) => {
    setMediaMatches(matches);
  };

  useEffect(() => {
    window
      .matchMedia(mediaQuery)
      .addEventListener("change", handleMediaMatchChange);
  }, []);

  return (
    <div id="home">
      <header className="main-header">
        <img src={Logo} alt="Allday" height="51" width="326" className="logo" />
        <Navbar matches={mediaMatches}></Navbar>
      </header>
      <main>
        <ProductImage></ProductImage>
        <ProductDesc></ProductDesc>
      </main>
    </div>
  );
};

export default Home;
