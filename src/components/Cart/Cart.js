import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  let produtTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    produtTotal = produtTotal + product.price;
  }

  let shipping = 0;
  if (produtTotal > 500) {
    shipping = 5;
  } else if (produtTotal > 100) {
    shipping = 20;
  } else if (produtTotal > 0) {
    shipping = 35;
  }

  const tax = produtTotal / 10;

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Item's orders: {cart.length}</p>
      <p>Product Price: {produtTotal}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
        <br />
        <small>Tax & Vat: {tax}</small>
      </p>
      <h3>Total Price: {produtTotal + shipping} </h3>
    </div>
  );
};

export default Cart;
