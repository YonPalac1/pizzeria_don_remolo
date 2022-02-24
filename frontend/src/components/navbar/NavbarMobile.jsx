import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from '../../redux/authReducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBurger } from '@fortawesome/free-solid-svg-icons'

import './navbarMobile.css'
import logo from '../../assets/images/logo.jpg'

export const NavbarMobile = () => {
  const logged = useSelector(store => store.auth.ok)
  const dispatch = useDispatch()

  useEffect(()=>{
  }, [logged])
  
  const handleLogout = () => {
    dispatch(logoutAction())
  }
  
  return (
    <div className="navbarMobile">
      <div className="navbarMobile-buttons">
        <div className="logo">
          <img src={logo}></img>
          Don Remolo
        </div>
        <div className="navbarMobile-buttons_btn">
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          <FontAwesomeIcon className="icon" icon={faBurger} />
        </div>
      </div>
      <div className="collapse">
        
      </div>
    </div>
  )
};