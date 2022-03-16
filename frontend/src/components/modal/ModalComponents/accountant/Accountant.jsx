import React from 'react'
import './accountant.css'

export const Accountant = ({handleValue,setHandleValue}) => {


    const increment = () =>  setHandleValue( handleValue + 1);

    const decrement = () => handleValue > 1 ? setHandleValue( handleValue - 1) : console.log('error');

  return (
     
    <div className="cart-quantitys">
        <span className="cart-quantity-label">
            Cantidad
        </span>
        <button
            className="cart-quantity-ct"
            onClick={decrement}
        >
            -
        </button>

        <span className="cart-quantity-number">
            {handleValue}
        </span>

        <button
            className="cart-quantity-ct"
            onClick={increment}
        >
            +
        </button>
    </div>
 
  )
}
 