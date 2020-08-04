import React from "react";
import "../styles/ProductImage.css";

const ProductImage = (props) => {
  const { activeFabric, padlock, icons, productName, shippingTime } = props;

  return (
    <div className="product-image-cont">
      <h3 className="product-name accent-font">{productName}</h3>

      <div className="product-info">
        <p className="secure" style={{ backgroundImage: `url(${padlock})` }}>
          Secure Checkout
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
