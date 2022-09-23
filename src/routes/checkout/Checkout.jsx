import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

function Checkout() {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <span>{cartItem.quantity}</span>
              <span onClick={() => removeItemToCart(cartItem)}>
                decrement
              </span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
