import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, totalAction, cartAction } from '../../../redux/cartReducer'



import '../cartDetails.css'




export const CartProduct = ({product}) => {

    const dispatch = useDispatch();
    const productCart = useSelector(state => state.cart.cart)
    const type = useSelector(state => state.cart.shipping)
    const totals = useSelector(state => state.cart.total)
    
    useEffect(()=>{
        if(productCart.length){
            const total = productCart.map(item => item.price )
            dispatch(totalAction(total))
        }
    }, [productCart, type])
    
    const deleteProduct = (id) => {
        dispatch(deleteAction(id))
    }

  return (
    <div className='cart-column_column img' key={product._id}>

        <div>
            <img src={product.image}></img>
        </div>


        <div>
            
        {
            product.count > 1 ?
            <h5>{  product.category === 'bebidas' ? product.brand : product.name } x { product.count }</h5> :
            <h5> { product.category === 'bebidas' ? product.brand : product.name } </h5>
            
        }

        
            <span>$ { product.price }</span>
        </div>


        <div className='icon'>
            <button onClick={()=>deleteProduct(product._id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </div>
  )
}

