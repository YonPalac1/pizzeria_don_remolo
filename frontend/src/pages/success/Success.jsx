import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeOrder } from '../../redux/cartReducer'
import { SuccessIcon } from './successIcon/SuccessIcon'
import { message } from '../../utils/Success.utils'
import { Error } from './error/Error'
import './success.css'


export const Success = () => {

    const orderStatus = useSelector(state => state.cart.orderStatus) // here is the flag of the order
  
    const order = useSelector(state => state.cart.order)
    const orderId = 20;  //we need this data from the endpoind
    const dispatch = useDispatch();
    const flag = true    //Also this...

    useEffect(() => {
      dispatch(makeOrder(order))
      // console.log(orderStatus)
      // console.log(order)
    },[Success])
    
         
    if (orderStatus.ok !== true) {
        return <Error/>
    }


    // console.log(orderStatus)
  return (
    <div className='main'>
      <SuccessIcon/>
      <span className='span1'>Pedido confirmado</span>
      <span className='span2'>Orden #{orderId}</span>
      <span className='span3'>
          
        {
          flag === true ? message.toTakeAway:
          message.toHome 
            
        }

      </span>
    </div>
  )
}
 