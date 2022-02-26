import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './navigation.css'

export const Navigation = () => {
  return (
    <div className='navigation-header'>
        <span>Carrito  <FontAwesomeIcon className='icon' icon={faChevronRight} /></span>
        <span>Detalles  <FontAwesomeIcon className='icon' icon={faChevronRight} /></span>
        <span>Envio  <FontAwesomeIcon className='icon' icon={faChevronRight} /></span>
        <span>Confirmacion</span>
    </div>
  )
}
