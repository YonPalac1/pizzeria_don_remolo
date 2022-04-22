import React from "react";
import { Routes, Route } from "react-router-dom";

import { ListProducts, Backoffice,BackofficeLayout } from './index'

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
