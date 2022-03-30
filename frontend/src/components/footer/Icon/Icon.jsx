import React from 'react'
import { Link } from 'react-router-dom'


export const Icon = ({item}) => {
  return (
   
   <Link to={item.link}><i className={item.CLASS_NAME}></i></Link> 
  )
}




  