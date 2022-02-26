import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { modalAction } from '../../redux/authReducer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import './modal.css'

export const Modal = () => {
    const viewModal = useSelector(state => state.data.modal)
    const product = useSelector(state => state.data.product)
    const dispatch = useDispatch()
    
    function setModal(modal) {
        dispatch(modalAction(modal))
    }

  return (
    <>
      { viewModal &&
          <div className='modal'>
              <div className='modal-card'>
                    <button
                    onClick={()=>{setModal(false)}}
                    className='btn-close'>X</button>
                <section className='modal-card_header'>
                    <h2>{ product.name }</h2>
                </section>

                <section className='modal-card_body'>

                  <div className='modal-card_body-photo'>
                    <div className='img'>
                      <img href="/"></img>
                    </div>
                  </div>

                  <div className='modal-card_body-details'>
                    <span>$ { product.price }</span>
                    <h5>Ingredientes</h5>
                    <p>{ product.ingredients }</p>
                    <div className='modal-card_body-addMore'>
                      <h5>Sumar al pedido</h5>
                    </div>
                  </div>

                  <div className='modal-card_body-comments'>
                    <h5>Comentarios</h5>
                    <textarea 
                      className='comments'
                      placeholder='¿Hay algo que debamos tener en cuenta para tu pedido?'></textarea>
                  </div>
                </section>

                <section className='modal-card_footer'>
                  <p>Subtotal: <span>$500.00</span></p>
                  <div className='modal-card_footer-more'>

                  </div>
                  <div className='modal-card_footer-buttons'>
                    <button>
                      <span>Agregar y seguir comprando</span>
                      <p>
                      <FontAwesomeIcon className='icon' icon={faCartPlus} />
                        Volver</p>
                    </button>

                    <button>
                      <span>Agregar e ir a pagar</span>
                      <p>
                      <FontAwesomeIcon className='icon' icon={faCartArrowDown} />
                      Pagar</p>
                      </button>
                  </div>
                </section>
              </div>
          </div>
      }
    </>
  )
}
