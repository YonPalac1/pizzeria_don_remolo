import React from 'react'
import './cartDetails.css'

export const CartDetails = () => {
  return (
    <div className='cart-column details'>
            <div className='cart-column_column img'>
                <div>
                    <img></img>
                </div>
                <div>
                    <h5>Pizza Muzzarella</h5>
                    <span>$ 500.00</span>
                </div>
            </div>

            <div className='cart-column_column coupon'>
                <input 
                placeholder='Código cupón'></input>
                <button className='add_coupon'>Añadir cupón</button>
            </div>
            <div className='cart-column_column subtotal'>
                <div>
                    <h5>Subtotal</h5>
                    <span>$ 500.00</span>
                </div>
                <div>
                    <h5>Envio</h5>
                    <span>Se calculará en el próximo paso</span>
                </div>
            </div>
            <div className='cart-column_column total'>
                <div>
                    <h5>Total</h5>
                    <span>$ 500.00</span>
                </div>
            </div>
        </div>
  )
}
