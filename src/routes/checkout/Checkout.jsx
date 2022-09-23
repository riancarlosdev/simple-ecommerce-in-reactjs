import React, { useCallback, useContext } from "react";
import Button from "../../components/button/Button";
import FormInput from "../../components/form-input/FormInput";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, addItemToCart, removeItemToCart, setIsCartOpen } =
    useContext(CartContext);

  const handleSubTotal = useCallback(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [cartItems]);

  return (
    <div className="container">
      <div className="max-layout">
        <div className="grid">
          <div className="input-sale">
            <div id="biling-details">
              <h1>Biling details</h1>
              <div className="item">
                <FormInput
                  label="First and last name"
                  inputOptions={{
                    type: "password",
                    name: "confirmPassword",
                    required: true,
                    value: "",
                    style: {
                      background: "#f7f7f7",
                    },
                  }}
                />
              </div>
              <div className="item">
                <FormInput
                  label="Email address"
                  inputOptions={{
                    type: "password",
                    name: "confirmPassword",
                    required: true,
                    value: "",
                    style: {
                      background: "#f7f7f7",
                    },
                  }}
                />
              </div>
              <div className="item">
                <FormInput
                  label="Zip / postal code"
                  inputOptions={{
                    type: "password",
                    name: "confirmPassword",
                    required: true,
                    value: "",
                    style: {
                      background: "#f7f7f7",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="cart-sumary">
            <div id="content-top">
              <div className="title-top">
                <BsCart size={30} />
                <h1>
                  Cart Sumary{" "}
                  <Link
                    onClick={() => setIsCartOpen(false)}
                    style={{ fontSize: 16, color: "blue", marginLeft: 10 }}
                    to="/"
                  >
                    Keep buying
                  </Link>
                </h1>
              </div>
              <div id="list-items">
                {cartItems.map((cartItem) => {
                  return (
                    <div className="item" key={cartItem.id}>
                      <div className="item-top">
                        <h2>{`${cartItem.quantity} x ${cartItem.name}`}</h2>
                        <span>
                          <strong>
                            R${cartItem.price * cartItem.quantity}
                          </strong>
                        </span>
                      </div>
                      <p>{cartItem.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="sb-total">
              <p>
                Sub total: <strong>R${handleSubTotal()}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
