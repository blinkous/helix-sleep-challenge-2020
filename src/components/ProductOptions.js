import React, { useState } from "react";
import "../styles/ProductOptions.css";

const ProductOptions = (props) => {
  const { fabricOptions, fabricSelectionHandler } = props;
  const [activeOption, setActiveOption] = useState(
    Object.keys(fabricOptions)[2]
  );

  const handleFabricSelection = ({ currentTarget }) => {
    fabricSelectionHandler(currentTarget.id);
    setActiveOption(currentTarget.id);
  };

  return (
    <div className="fabric-option-cont">
      <h4 className="choose-fabric accent-font">1. Choose a Fabric</h4>
      <p className="fabric-info">Choose your choice from fabrics to leather.</p>

      <h5 className="fabric-choices">Fabric Choices</h5>

      <div className="fabric-options">
        {Object.entries(fabricOptions).map(([key, value], index) => (
          <figure
            className={`fabric-option${activeOption === key ? " active" : ""}`}
            key={index}
            id={key}
            onClick={handleFabricSelection}
          >
            <img src={value} alt={key} className="fabric-image" />
            <figcaption className="fabric-caption">{key}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;
