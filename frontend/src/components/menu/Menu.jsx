import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allDataAction } from '../../redux/dataReducer'
import {MenuCard} from '../menuCard/MenuCard'
import spin from '../../assets/images/spin.gif'
import './menu.css'

export const Menu = () => {
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
    : products.map((product) => {
      return <MenuCard products={product} key={product._id} />
    }) }
  </div>)
}
