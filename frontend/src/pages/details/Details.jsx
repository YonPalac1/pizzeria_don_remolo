import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../../components/navigation/Navigation'
import { CartDetails } from '../../components/cartDetails/CartDetails'
import './details.css'

export const Details = () => {
  return (
    <>
        <Navigation />
        <div className='authentication'>
            <div className='authentication-column'>
                <form>
                    <div className='details'>
                        <div className='details_info'>
                            <div>
                                <h5>Contact <span>Yona.@gmail.com</span></h5>
                                <a>Edit</a>
                            </div>
                            
                            <div>
                                <h5>Ship to<span> Av Dto Alvarez</span></h5>
                                <a>Edit</a>
                            </div>
                            
                        </div>

                        <div className='details_details'>
                        <h5>Metodo de envio</h5>
                            <div>
                                <p>
                                    <input 
                                    id='local'
                                    type="checkbox" />
                                    <label htmlFor='local'>Retirar en el local</label>
                                </p>
                                <span>Gratis</span>
                            </div>
                            <div>
                                <p>
                                    <input 
                                    id='del'
                                    type="checkbox" />
                                    <label htmlFor='del'>Delivery</label>
                                </p>
                                <span>$ 130</span>
                            </div>
                        </div>
                        

                    </div>

                    <div className='details-footer'>
                        <Link to="/cart">Volver al carrito</Link>
                        <Link to="/payment" className='btn-send'>Ir a pagar</Link>
                    </div>
                </form>
            </div>
            
            <CartDetails />
        </div>
    </>
  )
}
