import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from '../redux/authReducer';

export const Navbar = () => {
  const logged = useSelector(store => store.auth.ok)
  const dispatch = useDispatch()

  useEffect(()=>{
  }, [logged])
  
  const handleLogout = () => {
    dispatch(logoutAction())
  }
  return <div className='navbar'>
    { !logged ?
    <>
      <Link className='navbar_link' to="/login">Login</Link>
      <Link className='navbar_link' to="/register">Register</Link>
    </>
    :
    <button onClick={handleLogout}>Logout</button>
    }
  </div>;
};
