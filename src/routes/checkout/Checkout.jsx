import React, { useCallback, useContext, useEffect, useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { validadeNumberInput } from "../../utils/validateNumberInput";
import axios from "axios";
import UF from "./data/UF.json";
import { riancarlosdev } from "riancarlosdev-validate-credit-card";

function Checkout() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const [postcode, setPostcode] = useState("");
  const [datapostcode, setDatapostcode] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const handleSubTotal = useCallback(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [cartItems]);

  const handlePostCode = useCallback(
    async (postcode) => {
      try {
        await setIsloading(true);
        await setTimeout(async () => {
          const { data } = await axios.get(
            `https://viacep.com.br/ws/${postcode}/json/`
          );
          setDatapostcode({ uf: data.uf, city: data.localidade });
          await setIsloading(false);
        }, 1300);
      } catch (err) {
        await setIsloading(false);
      }
    },
    [setIsloading, setDatapostcode]
  );

  console.log(isloading);

  useEffect(() => {
    if (postcode.length === 8) {
      handlePostCode(postcode);
    } else {
      setDatapostcode(null);
    }
  }, [handlePostCode, postcode]);

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
                    autoComplete: "off",
                    value: "",
                    onChange: undefined,
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
                    autoComplete: "off",
                    value: "",
                    onChange: undefined,
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
                    maxLength: 8,
                    type: "text",
                    name: "confirmPassword",
                    required: true,
                    autoComplete: "off",
                    value: postcode,
                    onChange: (e) => {
                      setPostcode(
                        validadeNumberInput(e.target.value, postcode)
                      );
                    },
                    style: {
                      background: "#f7f7f7",
                    },
                  }}
                />
              </div>
              <div className="item postalcode">
                {isloading && (
                  <div class="spinner-container">
                    <div class="spinner"></div>
                  </div>
                )}
                {!isloading && datapostcode && (
                  <div id="items-address">
                    <div className="item-address">
                      <span>Country</span>
                      <p>Brasil</p>
                    </div>
                    <div className="item-address">
                      <span>State</span>
                      <p>{UF[datapostcode.uf]}</p>
                    </div>
                    <div className="item-address">
                      <span>City</span>
                      <p>{datapostcode.city}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div id="payment-method">
              <h1>Payment method</h1>
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
