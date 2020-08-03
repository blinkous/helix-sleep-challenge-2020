import React from "react";
import "../styles/ProductDesc.css";

const ProductDesc = (props) => {
  const currency = "$";
  const { productInfo } = props;
  const { name, desc, promotion, price, payment_plan } = productInfo;

  return (
    <div className="product-desc-cont">
      <h3 className="product-name accent-font">{name}</h3>
      <p className="product-desc">{desc}</p>

      <div className="payment-options">
        <p className="flat-price">
          <span className="pay-now">Pay Now</span>
          <span className="price">
            {currency}
            {promotion.price}
          </span>
          <span className="full-price">
            {currency}
            {price}
          </span>
          <span className="discount tiny">
            {currency}
            {promotion.discount} OFF with code
          </span>
        </p>

        <p className="payment-plan">
          <span className="pay-now">Pay as low as</span>
          <span className="price">
            {currency}
            {payment_plan.rate}
          </span>
          <span className="plan-freq">/month</span>
          <span className="plan-name">with {payment_plan.plan_name}</span>
          <button className="learn-more tiny">Learn More</button>
        </p>

        <button className="add accent-font">Add to Cart</button>
        <button className="save accent-font">Save Design for Later</button>
      </div>
    </div>
  );
};

export default ProductDesc;
