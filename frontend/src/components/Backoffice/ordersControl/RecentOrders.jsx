import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { allOrdersAction } from "../../../redux/orderReducer";

export const RecentOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(allOrdersAction());
  }, []);

  return (
    <div className="orders-container">
      <h2>Bievenido Admin</h2>
      <span>Tenga un buen dia y disfrute su trabajo</span>
      <div className="orders-incomings_container">
        <div>
          <div className="orders-incomings_title">
            <h4>Solicitudes de Pedidos</h4>
            <Link to="/">
              ver mas <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="orders-incomings">
            <div className="register" >
              <h4>Nombre del usuario</h4>

              <button className="open-modal">detalles</button>

              <div className="buttons-add">
                <button>-</button>
                <button>+</button>
              </div>
            </div>
            <div className="register" >
              <h4>Nombre del usuario</h4>

              <button className="open-modal">detalles</button>

              <div className="buttons-add">
                <button>-</button>
                <button>+</button>
              </div>
            </div>
            <div className="register" >
              <h4>Nombre del usuario</h4>

              <button className="open-modal">detalles</button>

              <div className="buttons-add">
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="orders-incomings type-orders">
          <div className="orders-incomings_title">
            <h4>Delivery</h4>
          </div>
          <div className="register">
            <h4>Kristin algo</h4>
            <span>cancelado</span>
            <div className="buttons-add">
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
