import React from 'react'

export const Subtotal = ({productCart}) => {
  return (
    <>
        <h5>Subtotal</h5>
        <span>$ {productCart.price}</span>
    </>
  )
}
