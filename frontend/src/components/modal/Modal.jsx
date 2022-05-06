import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { modalAction } from '../../redux/authReducer'
import { cartAction } from '../../redux/cartReducer'
import { Accountant } from './ModalComponents/accountant/Accountant'
import './modal.css'

export const Modal = () => {

    const [handleValue, setHandleValue] = useState(1)

    // const productCart = useSelector(state => state.cart.cart)
    const viewModal = useSelector(state => state.data.modal)
    const product = useSelector(state => state.data.product)
    const dispatch = useDispatch()

    const setModal = modal => dispatch(modalAction(modal))

   /**
    * I'm trying to add a product to the cart, but I want to add the product with a quantity of 1, and
    * then if the user wants to add more of the same product, I want to add the product with the
    * quantity of the user's choice.
    * 
    * I'm using Redux to manage the state of the cart.
    * 
    * I'm using React Hooks to manage the state of the quantity.
    * 
    * I'm using React Hooks to manage the state of the price of the product.
    * 
    * I'm using React Hooks to manage the state of the price of the product with the quantity.
    * 
    * I'm using React Hooks to manage the state of the product.
    * 
    * I'm using React Hooks to manage the state of the product with the quantity.
    * 
    * I'm using React Hooks to manage the state of the product with the quantity and the price of
    */
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
        console.log('')

    }

  
    return (
        <>
            {viewModal &&
                <div className='modal'>
                    <div className='modal-backdrop' onClick={() => { setModal(false) }}></div>
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
                                    <img src={product.image} alt='product'></img>
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
