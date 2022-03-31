import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeOrder } from '../../redux/cartReducer'
import { SuccessIcon } from './successIcon/SuccessIcon'

export const Success = () => {

    const order = useSelector(state => state.cart.order)
    //const [flag,setFlag] = useState(false)

    // useEffect(() => {
    //   order !== 
    // })
    // const orderStatus = useSelector(state => state.cart.orderStatus)
        
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(makeOrder(order))
    },[Success])
        


    // console.log(orderStatus)
  return (
    <div>
      <SuccessIcon/>
      
    </div>
  )
}
 