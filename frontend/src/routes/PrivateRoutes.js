import React from "react";
import { Routes, Route } from "react-router-dom";
import { ListProducts } from "../components/Backoffice/ListProducts/ListProducts";
import { BackofficeLayout } from "../layout/BackofficeLayout/BackofficeLayout";
import { Backoffice } from "../pages/Backoffice/backoffice"

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
