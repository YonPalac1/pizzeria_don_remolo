import React from 'react'
import { Navigation } from '../../components/navigation/Navigation'
import { CartDetails } from '../../components/cartDetails/CartDetails'
import './cart.css'

export const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart-column'>
            
            <Navigation />

            <form>
                <div className='cart-body'>
                    <h5>Contacto</h5>
                    <div className='cart-body_input'>
                        <input 
                        name="email"
                        placeholder='Mail o numero de celular'></input>

                        <p>
                            <input type="checkbox" id='checkbox'></input>
                            <label htmlFor="checkbox"> Agregarme al newsletter para un 10% de descuento</label>
                        </p>
                    </div>

                    <h5>Dirección</h5>
                    <div className='cart-body_input names'>
                        <input
                        name="name"
                        placeholder='Nombre'></input>

                        <input 
                        name="lastname"
                        placeholder='Apellido'></input>
                    </div>
                    <div className='cart-body_input'>
                        <input 
                        name="street"
                        placeholder='Nombre de la calle'></input>
                        
                        <input 
                        name="note"
                        placeholder='Nota para el envio'></input>

                        <p>
                            <input type="checkbox" id='saveInfo'></input>
                            <label htmlFor="saveInfo"> Guardar esta informacion para una futura compra</label>
                        </p>

                    </div>
                    

                </div>

                <div className='cart-footer'>
                    <a >Volver al carrito</a>
                    <button className='btn-send'>Ir al envio</button>
                </div>
            </form>
        </div>
        
        <CartDetails />
    </div>
  )
}
