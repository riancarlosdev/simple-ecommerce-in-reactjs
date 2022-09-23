import React, { useContext } from "react";
import Button from "../../components/button/Button";
import FormInput from "../../components/form-input/FormInput";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

function Checkout() {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className="container-grid">
      <FormInput
        label="confirmPassword"
        inputOptions={{
          type: "password",
          name: "confirmPassword",
          required: true,
          value: "",
        }}
      />
      <Button children={"SIGN UP"} type="submit" />
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <span>{cartItem.quantity}</span>
              <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
