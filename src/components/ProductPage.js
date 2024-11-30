import React from "react"; // Assuming you have a component to display field details
import { useParams } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import "../styles/ProductPage.css";
import Star from "./Star";

const ProductPage = ({ products }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-container">
      <div className="product">
        <div className="grid grid-two-column">
          <div className="product-images">
            <img src={product.img} alt="product" className="product-image" />
          </div>

          <div className="product-data">
            <h2 className="product-name">{product.name}</h2>
            <Star stars={product.rating} />

            <div className="product-description">{product.description}</div>

            <div className="delivery-info">
              <TbTruckDelivery className="delivery-icon" />
              <p className="delivery-text">Delivery Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
