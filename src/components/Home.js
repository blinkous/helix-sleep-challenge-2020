import React, { useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import ProductImage from "./ProductImage";
import { ProductInfo, Icons, Logo } from "../js/data";
import ProductDesc from "./ProductDesc";
import ProductOptions from "./ProductOptions";

const Home = () => {
  const { fabric_options } = ProductInfo;
  const [activeFabric, setFabric] = useState(fabric_options["Red"]);

  const setNewFabric = (newFabric) => {
    setFabric(fabric_options[newFabric]);
  };

  return (
    <div id="home">
      <header className="main-header">
        <img src={Logo} alt="Allday" height="51" width="326" className="logo" />
        <Navbar></Navbar>
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
