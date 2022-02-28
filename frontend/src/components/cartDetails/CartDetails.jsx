import React, { useState } from 'react'
import './cartDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export const CartDetails = () => {
    const [isActive, setActive] = useState(false);
    
    const handleToggle = () => {
        setActive(!isActive);
      };

    return (
        <>
        <div className="cart-column_btn_mobile" onClick={handleToggle}>
            <span>En carrito</span>
            <FontAwesomeIcon className='icon' icon={faChevronDown} />
        </div>
        <div className={isActive ? 'cart-column details active' : 'cart-column details' }>
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
        </>
    )
}
