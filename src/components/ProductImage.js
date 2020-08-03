import React from "react";
import "../styles/ProductImage.css";

const ProductImage = (props) => {
  const secure = "Secure Checkout";
  const shippingTime = "Ships in 5-7 Business Days";
  const { activeFabric, padlock, icons, productName } = props;

  return (
    <div className="product-image-cont">
      <div className="product-header">
        <p className="secure" style={{ backgroundImage: `url(${padlock})` }}>
          {secure}
        </p>
        <p className="shipping-time">{shippingTime}</p>
      </div>
      <img src={activeFabric} alt={productName} className="product-image" />
      <div className="icons-cont">
        {Object.entries(icons).map(([key, value], index) => (
          <img src={value} alt={key} key={index} className="icon" />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
