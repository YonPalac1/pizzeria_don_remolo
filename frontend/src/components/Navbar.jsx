import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return <div className='navbar'>
    <Link className='navbar_link' to="/login">Login</Link>
    <Link className='navbar_link' to="/register">Register</Link>
  </div>;
};
