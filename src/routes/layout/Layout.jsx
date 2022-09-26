import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./navbar.styles.scss";
import { useLocation } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { CartContext } from "../../context/cart.context";
import { LogoCompany } from "../../components/logo-company";
import { TbCircle1, TbCircle2, TbCircle3 } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

export const Layout = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const path = useLocation().pathname;

  return (
    <>
      <div className="navigation max-layout">
        <LogoCompany />
        {path !== "/checkout" && (
          <>
            <CartIcon />
            {isCartOpen && <CartDropDown />}
          </>
        )}
        {path === "/checkout" && (
          <div id="container-position-check">
            <div className="item-check">
              <BsCheckCircleFill color="#4bb80c" size={29} />
              <div className="value">
                <p>Shopping Cart</p>
                <div className="line" />
              </div>
            </div>
            <div className="item-check">
              <TbCircle2 size={35} color="#4bb80c" />
              <div className="value">
                <p>Checkout</p>
                <div style={{ background: "#adacac" }} className="line" />
              </div>
            </div>
            <div className="item-check finish">
              <TbCircle3 color="#cccccc" size={30} />
              <div className="value">
                <p style={{ color: "#c2c2c2", fontWeight: 300 }}>Finish</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};
