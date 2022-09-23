/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./styles.scss";

export const LogoCompany = () => {
  return (
    <Link className="logo-link" to="/">
      <div className="container-logo">
        <CrwnLogo className="logo" />
        <h1>Name Company</h1>
      </div>
    </Link>
  );
};
