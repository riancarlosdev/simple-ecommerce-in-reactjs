import React, { useContext, useState } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { LogoCompany } from "../../components/logo-company";

export const Layout = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <LogoCompany />
        <CartIcon />
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};
