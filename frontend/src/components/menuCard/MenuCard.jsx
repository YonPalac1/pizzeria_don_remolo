import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faCartShopping, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../components/modal/Modal";
import { modalAction, productAction } from "../../redux/dataReducer";
import { cartAction } from '../../redux/cartReducer'

export const MenuCard = ({ products }) => {
    const location = useLocation().pathname; // Get route
    const product = useSelector(state => state.data.product);

    useEffect(() => {
        const ROUTE = "/";
        if (location == ROUTE) {
            setModal(false);
        }
    }, []);

    const dispatch = useDispatch();

    function setModal(modal, products) {
        dispatch(modalAction(modal));
        dispatch(productAction(products));
    }

    function handleAddProduct(products) {
        dispatch(cartAction(products))
    }

    return (
        <div className="menu-card">
            <div
                className="menu-card_img"
                onClick={() => {
                    setModal(true, products);
                }}
            >
                <button className="btn-modal">
                    <FontAwesomeIcon icon={faInfo} />
                </button>
                <img src={products.image} />
            </div>
            <div className="menu-card_details">
                {products.category !== "bebidas" ? (
                    <>
                        <span>{products.name}</span>
                    </>
                ) : (
                    <>
                        <span>{products.brand}</span>
                        <p>
                            {products.size} {products.measurement}
                        </p>
                    </>
                )}
                <div className="card_footer">
                    <b>$ {products.price}</b>
                    <button onClick={() => handleAddProduct(products)}>
                        <FontAwesomeIcon icon={faCartShopping} />{" "}
                        Carrito
                    </button>
                </div>
            </div>
            <Modal />
        </div>
    );
};
