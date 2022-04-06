import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, totalAction } from "../../redux/cartReducer";
import { CartProduct } from "./cartCompornents/CartProduct";
import { Coupon } from "./cartCompornents/Coupon";
import { Subtotal } from "./cartCompornents/Subtotal";
import { Send } from "./cartCompornents/Send";
import { Total } from "./cartCompornents/Total";

import "./cartDetails.css";

export const CartDetails = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.cart.cart);
  const type = useSelector((state) => state.cart.shipping);
  const totals = useSelector((state) => state.cart.total);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (productCart.length) {
      const total = productCart.map((item) => item.price);
      dispatch(totalAction(total));
    }
  }, [productCart, type]);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="cart-column_btn_mobile" onClick={handleToggle}>
        <span>En carrito</span>
        <FontAwesomeIcon className="icon" icon={faChevronDown} />
      </div>

      <div
        className={
          isActive ? "cart-column details active" : "cart-column details"
        }
      >
        {!productCart.length ? (
          <div className="cart-column_column img">
            No hay productos en el carrito
          </div>
        ) : (
          productCart.map((product) => {
            return <CartProduct product={product} />;
          })
        )}

        <div className="cart-column_column coupon">
          <Coupon />
        </div>
        <div className="cart-column_column subtotal">
          <div>
            <Subtotal productCart={productCart} />
          </div>
          <div>
            <Send type={type} />
          </div>
        </div>
        <div className="cart-column_column total">
          <Total totals={totals} />
        </div>
      </div>
    </>
  );
};
