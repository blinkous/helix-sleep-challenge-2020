import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import ProductImage from "./ProductImage";
import { ProductInfo, Icons, Logo } from "../js/data";
import ProductDesc from "./ProductDesc";
import ProductOptions from "./ProductOptions";

const Home = () => {
  const mediaQuery = "(max-width: 1024px)";
  const [mediaMatches, setMediaMatches] = useState(
    window.matchMedia(mediaQuery).matches
  );
  const { fabric_options } = ProductInfo;
  const [activeFabric, setFabric] = useState(fabric_options["Red"]);

  const handleMediaMatchChange = ({ matches }) => {
    setMediaMatches(matches);
  };

  const setNewFabric = (newFabric) => {
    setFabric(fabric_options[newFabric]);
  };

  useEffect(() => {
    try {
      window
        .matchMedia(mediaQuery)
        .addEventListener("change", handleMediaMatchChange);
    } catch (error) {
      window.matchMedia(mediaQuery).onchange = handleMediaMatchChange;
    }
  }, []);

  return (
    <div id="home">
      <header className="main-header">
        <img src={Logo} alt="Allday" height="51" width="326" className="logo" />
        <Navbar matches={mediaMatches}></Navbar>
      </header>

      <main className="main-content">
        <ProductImage
          activeFabric={activeFabric}
          padlock={Icons["Padlock"]}
          icons={Icons["product_icons"]}
          productName={ProductInfo.name}
        ></ProductImage>

        <div className="product-details">
          <ProductDesc productInfo={ProductInfo}></ProductDesc>
          <ProductOptions
            fabricOptions={fabric_options}
            fabricSelectionHandler={setNewFabric}
          ></ProductOptions>
        </div>
      </main>
    </div>
  );
};

export default Home;
