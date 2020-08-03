import React, { useState, useEffect } from "react";
import "../styles/ProductDesc.css";
import { ProductInfo } from "../js/data";

const ProductDesc = (props) => {
  const currency = "$";
  const { fabricOptions, productInfo } = props;
  const { name, desc, promotion, price, payment_plan } = productInfo;

  return (
    <div className="product-info-cont">
      <div className="product-desc-cont">
        <h3 className="product-name accent-font">{name}</h3>
        <p className="product-desc">{desc}</p>
        <div className="payment-options">
          <p className="flat-price">
            <span className="pay-now">Pay Now</span>
            <span className="promo-price">
              {currency}
              {promotion.price}
            </span>
            <span className="price">
              {currency}
              {price}
            </span>
            <span className="discount">
              {currency}
              {promotion.discount} OFF with code
            </span>
          </p>
          <p className="payment-plan">
            <span className="pay-now">Pay as low as</span>
            <span className="plan-cost">
              {currency}
              {payment_plan.rate}
            </span>
            <span className="plan-freq">/month</span>
            <span className="plan-name">with {payment_plan.plan_name}</span>
          </p>
          <button className="add accent-font">Add to Cart</button>
          <button className="save accent-font">Save Design for Later</button>
        </div>
      </div>
      <div className="fabric-option-cont">
        <h4 className="choose-fabric">1. Choose a Fabric</h4>
        <p className="fabric-info">
          Choose your choice from fabrics to leather.
        </p>
        <h5 className="fabric-choices">Fabric Choices</h5>
        <div className="fabric-options">
          {Object.entries(fabricOptions).map(([key, value], index) => (
            <figure className="fabric-option" key={index}>
              <img src={value} alt={key} />
              <figcaption>{key}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
