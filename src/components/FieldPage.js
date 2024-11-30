import React from "react";
import "../styles/FieldPage.css";

const FieldPage = () => {
  return (
    <div className="container">
      <div className="product">
        <div className="product-image">
          <img src="valve_image.jpg" alt="Industry Valve" />
        </div>
        <div className="product-details">
          <h1 className="product-name">Industry Valve</h1>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            diam eu augue ultricies, vel accumsan neque faucibus. Quisque auctor
            mauris vel eleifend fringilla. Ut consequat tortor nec mi accumsan,
            eget fermentum enim efficitur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FieldPage;
