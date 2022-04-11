import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Backoffice } from "../pages/backoffice/Backoffice";
import { sessionAction } from "../redux/authReducer";

export const PrivateRoutes = () => {

  return (
    <Routes>
      <Route path="/admin" element={<Backoffice />} />
    </Routes>
  );
};
