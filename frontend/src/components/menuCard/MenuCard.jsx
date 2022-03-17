import React, { useState, useEffect } from 'react'
import { Modal } from '../../components/modal/Modal';

import { useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { modalAction } from '../../redux/dataReducer'
import { productAction } from '../../redux/dataReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export const MenuCard = ({ products }) => {

  const location = useLocation().pathname // Get route

  useEffect(() => {
    const ROUTE = '/';      
    if (location == ROUTE) {
      setModal(false)
    }
  });
  

  const dispatch = useDispatch()
  
  function setModal(modal, products) {
      dispatch(modalAction(modal))
      dispatch(productAction(products))
  }
  
    return <div className='menu-card'>
          <div className='menu-card_img'>
            <img src={ products.image } />
          </div>
          <div className='menu-card_details'>
            { products.category !== "bebidas" ?
            <>
              <span>{ products.name }</span>
              <p>{ products.description }</p>
            </>
              :
            <>
              <span>{ products.brand }</span>
              <p>{ products.size } { products.measurement}</p>
            </>
            }
            <b>$ { products.price }</b>
          </div>
          <div className='menu-card_btns'>
            <button
          onClick={()=>{
            setModal(true, products);
          }}
          className='btn-add'>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          </div>
          <Modal/>
        
    </div>
}
