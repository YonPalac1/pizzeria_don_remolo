import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { modalAction } from '../../redux/authReducer'
import { cartAction } from '../../redux/cartReducer'
import { Accountant } from './ModalComponents/accountant/Accountant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import './modal.css'

export const Modal = () => {

    const [handleValue, setHandleValue] = useState(1)

    const productCart = useSelector(state => state.cart.cart)
    const viewModal = useSelector(state => state.data.modal)
    const product = useSelector(state => state.data.product)
    const dispatch = useDispatch()

    const setModal = modal => dispatch(modalAction(modal))

    const handleAddProduct = () => {
         dispatch(cartAction(product)) 

      let count  = handleValue
      let priceCounted = product.price * count
         if (count > 1) {
             let copy = product

            Object.defineProperty(copy, 'count', {
                value: count,
                writable: true,
                enumerable: true,
                configurable: true
              });
            Object.defineProperty(copy, 'priceCounted', {
                value: priceCounted,
                writable: true,
                enumerable: true,
                configurable: true
              });
         }

         loadValue(product)
         setHandleValue(1)
    }

    const loadValue = (product) => {

        product.count > 1 ? product.price = product.count * product.price:
        console.log('not add')

    }

  
    return (
        <>
            {viewModal &&
                <div className='modal'>
                    <div className='modal-card'>
                        <button
                          onClick={() => { setModal(false) }}
                          className='btn-close'>
                            X
                        </button>

                        <section className='modal-card_header'>
                            {product.category !== "bebidas" ?
                                <h2>{product.name}</h2>
                                :
                                <h2>{product.brand}</h2>
                            }
                        </section>

                        <section className='modal-card_body'>

                            <div className='modal-card_body-photo'>
                                <div className='img'>
                                    <img href={product.image}></img>
                                </div>
                            </div>

                            <div className='modal-card_body-details'>
                                <span>$ {product.price}</span>
                                <h5>Descripción</h5>

                                {product.category !== "bebidas" ?
                                    <p>{product.description}</p>
                                    :
                                    <p>{product.size} {product.measurement}</p>
                                }
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

                            <div 
                            
                                className='modal-card_footer-more'>

                            </div>

                            <Accountant handleValue= {handleValue} setHandleValue= {setHandleValue} />

                            <div className='modal-card_footer-buttons'>
                                <Link className='btn-add-cart' onClick={ handleAddProduct} to="/">
                                    <span>Agregar y seguir comprando</span>
                                        <p>
                                            <FontAwesomeIcon className='icon' icon={faCartPlus} />
                                            Volver
                                        </p>
                                </Link>

                                <Link className='btn-add-cart' onClick={handleAddProduct} to="/cart">
                                    <span>Agregar e ir a pagar</span>
                                    <p>
                                        <FontAwesomeIcon className='icon' icon={faCartArrowDown} />
                                        Pagar</p>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}
