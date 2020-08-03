import React, { useState, useEffect } from "react";
import "../styles/ProductDetails.css";
import ProductDesc from "./ProductDesc";
import ProductOptions from "./ProductOptions";

const ProductDetails = (props) => {
  const { fabricOptions, productInfo } = props;

  return (
    <div className="product-info-cont">
      <ProductDesc productInfo={productInfo}></ProductDesc>
      <ProductOptions fabricOptions={fabricOptions}></ProductOptions>
    </div>
  );
};

export default ProductDetails;
