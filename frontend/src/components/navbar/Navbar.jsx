import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from '../../redux/authReducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './navbar.css'
import logo from '../../assets/images/logo.jpg'

export const Navbar = () => {
  const logged = useSelector(store => store.auth.ok)
  const dispatch = useDispatch()

  useEffect(()=>{
  }, [logged])
  
  const handleLogout = () => {
    dispatch(logoutAction())
  }
  return <div className='navbar'>
    <div className='navbar-column'>
      <div className="logo">
        <img src={logo}></img>
        Don Remolo
      </div>
    </div>
    <div className='navbar-column links'>
      <Link to="/">Pizzas</Link>
      <Link to="/">Empanadas</Link>
      <Link to="/">Bebidas</Link>
      <Link to="/">Postres</Link>
    </div>
    <div className='navbar-column iconCart'>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  </div>;
};
