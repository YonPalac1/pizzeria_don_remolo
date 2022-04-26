import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartIcon.css";

export const CartIcon = () => {
  const productCart = useSelector((state) => state.cart.cart);
  const totals = useSelector((state) => state.cart.total);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {}, [productCart, totals]);

  const showCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <button className="icon-button" onClick={showCart}>
        <div className="icon-button_container">
          <FontAwesomeIcon icon={faShoppingCart} /> 
          {productCart.length ? <span>{productCart.length}</span> : "" }
        </div>
      </button>

      <div className={`menu_cart ${openCart && "active"}`}>
        <div className="container_cart">
          {productCart.length ? (
            productCart.map((product) => {
              return (
                <div className="image_content">
                  <img src={product.image}></img>
                  <div className="product_info">
                    <span className="name_product">{product.name}</span>
                    <span>${product.price}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="msg_empty">
              <span> No hay productos en el carrito</span>
            </div>
          )}
        </div>
        <div className="total_footer">
          <h3>Total:</h3>
          <span>$ {totals}</span>
        </div>
        <Link to="/cart" className="link_cart">
          {" "}
          Ir al carrito
        </Link>
      </div>
    </>
  );
};
