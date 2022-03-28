import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from '../../redux/authReducer';
import { column_titles } from '../../utils/Navbar.util';
import { Item } from './Item/Item'

// import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './navbar.css'
import logo from '../../assets/images/logo.jpg'

export const Navbar = () => {
    const logged = useSelector(store => store.auth.ok)
    const dispatch = useDispatch()


    useEffect(() => {
    }, [logged])

    const handleLogout = () => {
        dispatch(logoutAction())
    }
    return <div className='navbar'>
        <div className='navbar-column'>
            <div className="logo">
                <Link to="/">
                    <img src={logo}></img>
                    Don Remolo
                </Link>
            </div>
        </div>
        <div className='navbar-column links'>
           
            {
                column_titles.map(category => {
                return <Item category={category} />
            })
      }

        </div>
        <div className='navbar-column iconCart'>
           <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> </Link>
        </div>
    </div>;
};
