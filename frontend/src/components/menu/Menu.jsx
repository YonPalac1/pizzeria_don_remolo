import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allDataAction, pageAction } from '../../redux/dataReducer'
import {MenuCard} from '../menuCard/MenuCard'
import spin from '../../assets/images/spin.gif'
import './menu.css'
import { Pagination } from '../pagination/Pagination'


export const Menu = () => {

  let pagina = useSelector(state => state.data.page)
  let porPagina = useSelector(state => state.data.productsByPage)


  const loader = useSelector(state => state.data.loading)
  const products = useSelector(state => state.data.products)
  const dispatch = useDispatch();

  
  useEffect(()=>{
    try {
      dispatch(allDataAction())
  
    } catch(err){console.log(err)}
  }, [dispatch])


  return (<div className='menu'>
    { loader ?
    <div className='spin'>
      <img src={spin}></img>
    </div>
    :
    products.slice (
      (pagina - 1) * porPagina,
      (pagina - 1) * porPagina + porPagina).map((product) => {
       return <MenuCard products={product} key={product._id} />
    
    }) }
  </div>
  );
}


