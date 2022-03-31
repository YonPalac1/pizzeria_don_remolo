import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartIcon.css";

export const CartIcon = () => {
  return (
    <button className="icon-button">
      <FontAwesomeIcon icon={faShoppingCart} />{" "}
    </button>
  );
};
