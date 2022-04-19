import React from "react";
import { Routes, Route } from "react-router-dom";
import { ListProducts } from "../components/Backoffice/ListProducts/ListProducts";
import { FormAddProduct } from "../components/Backoffice/FormAddProduct/FormAddProduct";
import { Backoffice } from "../pages/backoffice/Backoffice";
import OrdersControl from "../components/ordersControl/OrdersControl";

export const PrivateRoutes = () => {
  return (
    <Backoffice>
      <Routes>
        <Route path="/" element={<OrdersControl />} />
        <Route path="/add-products" element={<FormAddProduct />} />
        <Route path="/list-products" element={<ListProducts />} />
      </Routes>
    </Backoffice>
  );
};
