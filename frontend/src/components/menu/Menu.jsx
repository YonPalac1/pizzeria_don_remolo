import React from 'react'
import {MenuCard} from '../menuCard/MenuCard'
import './menu.css'

export const Menu = () => {
  const products = [
    {
      id: 1,
      name: "Muzarella",
      ingredients: "Salsa, muzarella, aceitunas, oregano",
      price: 500.00,
      image: ""
    },
    {
      id: 2,
      name: "Jamon y Queso",
      ingredients: "Jamon, muzarella, aceitunas, oregano",
      price: 700.00,
      image: ""
    },
    {
      id: 3,
      name: "Pizza Napolitana",
      ingredients: "Jamon, muzarella, aceitunas, oregano",
      price: 1200.00,
      image: ""
    },
  ]

  return (<div className='menu'>
    { products.map((product) => {
      return <MenuCard products={product} key={product.id} />
    }) }
  </div>)
}
