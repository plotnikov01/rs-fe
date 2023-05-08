import React, { useState } from "react";
import "./header.scss";
import { SearchBar } from "src/components";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Button from "src/components/Button/Button";

export const Header = (props) => {
  const { toggleModal } = props;

  const currentRoute = useLocation();

  return (
    <div className="header">
      <ul className="header__navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/catalog">
          <li>Catalog</li>
        </Link>
        {currentRoute.pathname === "/catalog" && (
          <Button toggleModal={toggleModal}>Add new Item</Button>
        )}
      </ul>
      <img src={logo} alt="logo" className="header__logo" />
    </div>
  );
};
