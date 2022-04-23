import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal";
import { modalAction } from "../../../redux/dataReducer";
import { allOrdersAction, confirmOrderAction, deleteOrderAction, detailsModal } from "../../../redux/orderReducer";
import './recentOrders.css'

export const RecentOrders = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.data.modal);
  const orders = useSelector((state) => state.order.orders);
  const ordersConfirm = useSelector((state) => state.order.ordersConfirm);

  useEffect(() => {
    dispatch(allOrdersAction());
  }, [ordersConfirm]);
  
  useEffect(()=>{}, [orders, ordersConfirm])

  useEffect(()=>{
  },[])

  const handleConfirm = (id) => {
    dispatch(confirmOrderAction(id))
  }

  const openModal = (data) => {
    dispatch(modalAction(true));
    dispatch(detailsModal(data))
  };

  const handleDelete = (id) => {
    dispatch(deleteOrderAction(id))
  }

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
            {orders &&
              orders.map((order) => {
                return <div className="register" key={order._id}>
                  <h4>{order.name}</h4>

                  <button className="open-modal" onClick={()=>openModal(order)}>detalles</button>

                  <div className="buttons-add">
                  <button onClick={()=>handleDelete(order._id)}>Cancelar</button>
                    { order.status === 1 ?
                    <button onClick={()=>handleConfirm(order._id)}>Confirmar</button>
                      : 
                    <FontAwesomeIcon className="icon-confirm" icon={faCheckCircle} />
                  }
                  </div>
                </div>;
              })}
          </div>
        </div>
      </div>
      {modal && <Modal />} 
    </div>
  );
};
