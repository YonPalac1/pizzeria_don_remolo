import React from 'react'
import { Link } from 'react-router-dom'


export const Icon = ({item}) => {

    const { link, CLASS_NAME } = item;
  

  return (
  
    <item.iconSvg>
      <Link to={link}><i className={CLASS_NAME}>{item.iconSvg}</i></Link> 
   </item.iconSvg>
  )
}




  