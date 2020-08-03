import React, { useState, useEffect } from "react";
import "../styles/ProductImage.css";

const ProductImage = (props) => {
  const secure = "Secure Checkout";
  const shippingTime = "Ships in 5-7 Business Days";

  return (
    <div className="product-image">
      <div className="header">
        <p className="secure">{secure}</p>
        <p className="shipping-time">{shippingTime}</p>
      </div>
    </div>
  );
};

export default ProductImage;
