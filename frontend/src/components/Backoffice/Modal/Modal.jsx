import React from "react";
import { useDispatch } from "react-redux";
import { productToEditDataAction } from "../../../redux/crudReducer";
import { modalAction } from "../../../redux/dataReducer";
import { FormAddProduct } from "../FormAddProduct/FormAddProduct";
import "./modal.css";

export const Modal = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(modalAction(false));
    dispatch(productToEditDataAction());
  };

  return (
    <div className="modalActive">
      <div className="modalProduct" onClick={openModal}></div>
      <FormAddProduct />
    </div>
  );
};
