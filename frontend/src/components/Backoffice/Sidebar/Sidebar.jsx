import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faList, faCoins } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='image'>
        <img src="../images/logo.png" />
      </div>
        <ul>
          <li>
            <Link to="/backoffice/"><FontAwesomeIcon icon={faCoins} /> Administrar ordenes</Link></li>
          <li> 
            <Link to="/backoffice/list-products"><FontAwesomeIcon icon={faList} /> Listado de productos</Link></li>
          <li> 
            <Link to="/backoffice/add-products"><FontAwesomeIcon icon={faDesktop} /> Agregar productos</Link></li>
        </ul>
    </div>
  )
}
