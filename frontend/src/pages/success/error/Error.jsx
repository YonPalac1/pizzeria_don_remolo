import React from 'react'
import { ErrorICon } from './errorIcon/ErrorICon'

import './error.css'


export const Error = () => {




  // console.log(orderStatus)
  return (
    <div className='main'>


      <ErrorICon />


      <span className='span1'>Pedido realizado sin éxito, pruebe más tarde.</span>
      {/* <span className='span2'>hola</span> */}
      <span className='span3'>

        Por favor intente de nuevo, disculpe las molestias.

      </span>
    </div>
  )
}
