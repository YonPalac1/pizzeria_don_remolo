import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faList, faCoins } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css';

export const Sidebar = () => {
  const location = useLocation().pathname;

  return (
    <div className="navigation">
      <Link to="/backoffice/" className={location === '/backoffice/' ? `active` : ""}>Mi perfil</Link>
      <Link to="/backoffice/list-products" className={location === '/backoffice/list-products' ? `active` : ""}>Editar productos</Link>
    </div>
  )
}
