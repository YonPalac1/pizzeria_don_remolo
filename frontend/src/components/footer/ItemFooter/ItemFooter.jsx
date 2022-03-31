import React from 'react'
import { Link  } from 'react-router-dom';
import './ItemFooter.css'


export const ItemFooter = ({item}) => {

    const {link } = item

  return (
    <Link key={item.sentence} to={link} >{item.sentence}</Link>  
  )
  
}

 