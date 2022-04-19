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

import { sessionAction } from "../redux/authReducer.js";
import { Details } from "../pages/details/Details.jsx";
import { NotFound } from "./notFound/NotFound.jsx";

import { Layout } from "../layout/Layout.jsx";
import { PrivateRoutes } from "./PrivateRoutes";
import OrdersControl from "../components/ordersControl/OrdersControl.jsx";

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
                        exact
                        path="/login"
                        element={logged ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        exact
                        path="/register"
                        element={logged ? <Navigate to="/" /> : <Register />}
                    />
                    {/* <Route exact path="/" element={<Home />} /> */}

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/details" element={<Details />} />
                    <Route exact path="/payment" element={<Payment />} />
                    <Route exact path="/success" element={<Success />} />
            

                    <Route
                        path="/backoffice/*"
                        element={rol === 1 ? <PrivateRoutes /> : <Navigate to="/" />}
                    />
                     

                    <Route path='*' element={<NotFound />} />
                   

        <Route path="*" element={<NotFound />} />
      </Routes>

      </Layout>
    </Router>
  );
};

export default AppRouter;
