import React from 'react'
import {MenuCard} from '../menuCard/MenuCard'
import './menu.css'
import img1  from '../../temp/pizza.jpeg'
import img2 from '../../temp/muzzarella.jpg'
import img3 from '../../temp/napolitana.jpg'

export const Menu = () => {
  const products = [
    {
      id: 1,
      name: "Muzarella",
      ingredients: "Salsa, muzarella, aceitunas, oregano",
      price: 500.00,
      image: img1
    },
    {
      id: 2,
      name: "Jamon y Queso",
      ingredients: "Jamon, muzarella, aceitunas, oregano",
      price: 700.00,
      image: img2
    },
    {
      id: 3,
      name: "Pizza Napolitana",
      ingredients: "Jamon, muzarella, aceitunas, oregano",
      price: 1200.00,
      image: img3
    },
  ]

  return (<div className='menu'>
    { products.map((product) => {
      return <MenuCard products={product} key={product.id} />
    }) }
  </div>)
}
