import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="products">
      <div className="">
        <img src={img} alt="Productimage" />
      </div>
      <div className="products-details">
        <h3 className="products-name">
          {name} <br />
          <small>by: {seller}</small>
        </h3>

        <p>
          <small>by: {seller}</small>
        </p>
        <p>$ {price}</p>

        <p>
          <small>
            Only {stock} is available{seller}
          </small>
        </p>
        <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faCartArrowDown} />
          Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
