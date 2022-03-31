import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Login } from "../pages/LoginRegister/Login.jsx";
import { Register } from "../pages/LoginRegister/Register.jsx";
import { Home } from "../pages/home/Home.jsx";
import { Cart } from "../pages/cart/Cart.jsx";
import { Payment } from "../pages/payment/Payment.jsx";
import { Success } from "../pages/success/Success.jsx";

import { Navbar } from "../components/navbar/Navbar.jsx";
import { NavbarMobile } from "../components/navbar/NavbarMobile.jsx";
import { sessionAction } from "../redux/authReducer.js";
import { Details } from "../pages/details/Details.jsx";

import { Layout } from "../layout/Layout.jsx";
import { PrivateRoutes } from "./PrivateRoutes";

const AppRouter = () => {
  const logged = useSelector((store) => store.auth.ok);
  const rol = useSelector((store) => store.auth.rol);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");
    if (loggedUser) {
      dispatch(sessionAction(loggedUser));
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={logged ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={logged ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route
            path='/backoffice/*'
            element={rol === 1 ? <PrivateRoutes /> : <Navigate to='/' />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
