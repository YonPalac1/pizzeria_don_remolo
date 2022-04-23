import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sessionAction } from "../redux/authReducer.js";
import { Login, Register, Home, Cart, Payment, Success, Layout, PrivateRoutes, NotFound, Details, OrdersControl } from './index'





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
         

          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      
      <Routes>
        <Route
          path="/backoffice/*"
          element={rol === 1 ? <PrivateRoutes /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
