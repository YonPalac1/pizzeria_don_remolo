import React from "react";
import { Routes, Route } from "react-router-dom";
import { ListProducts } from "../components/Backoffice/ListProducts/ListProducts";
import { Backoffice } from "../pages/backoffice/Backoffice";
 

export const PrivateRoutes = () => {
  return (
    <BackofficeLayout>
      <Routes>
        <Route path="/" element={<Backoffice /> } />
        <Route path="/list-products" element={<ListProducts />} />
      </Routes>
    </BackofficeLayout>
  );
};
