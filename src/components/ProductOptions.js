import React, { useState, useEffect } from "react";
import "../styles/ProductOptions.css";

const ProductOptions = (props) => {
  const { fabricOptions } = props;

  return (
    <div className="fabric-option-cont">
      <h4 className="choose-fabric accent-font">1. Choose a Fabric</h4>
      <p className="fabric-info">Choose your choice from fabrics to leather.</p>

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
  );
};

export default ProductOptions;
