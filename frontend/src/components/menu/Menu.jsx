import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allDataAction } from '../../redux/dataReducer'
import {MenuCard} from '../menuCard/MenuCard'
import spin from '../../assets/images/spin.gif'
import './menu.css'

export const Menu = () => {

  let page = useSelector(state => state.data.page)
  let byPage = useSelector(state => state.data.productsByPage)


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
      (page - 1) * byPage,
      (page - 1) * byPage + byPage).map((product) => {
       return <MenuCard products={product} key={product._id} />
    
    }) }
  </div>
  );
}


