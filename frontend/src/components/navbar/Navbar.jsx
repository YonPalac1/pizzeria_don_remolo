import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/authReducer";
import { column_titles } from "../../utils/Navbar.util";
import { Item } from "./Item/Item";
import logo from "../../assets/images/logo.jpg";
import "./navbar.css";
import { Layout } from "../layout/Layout";

export const Navbar = () => {
  const logged = useSelector((store) => store.auth.ok);
  const dispatch = useDispatch();

  useEffect(() => {}, [logged]);

  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <div className="navbar">
      <div className="navbar-column">
        <div className="logo">
          <Link to="/">
            <img src={logo}></img>
            Don Remolo
          </Link>
        </div>
      </div>
      <div className="navbar-column links">
        {column_titles.map((category) => {
          return <Item category={category} key={category} />;
        })}
      </div>
      <div className="navbar-column iconCart">
        <Layout />
      </div>
    </div>
  );
};
