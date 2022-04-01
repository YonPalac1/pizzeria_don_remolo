import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeOrder } from '../../redux/cartReducer'
import { SuccessIcon } from './successIcon/SuccessIcon'
import { message } from '../../utils/Success.utils'


export const Success = () => {

    const order = useSelector(state => state.cart.order)
    //const [flag,setFlag] = useState(false)

    // useEffect(() => {
    //   order !== 
    // })
    // const orderStatus = useSelector(state => state.cart.orderStatus)

    const orderId = 20;  //we need this data from the endpoind
    const dispatch = useDispatch();
    const flag = 'takeAway'

    useEffect(() => {
      dispatch(makeOrder(order))
    },[Success])
    
        


    // console.log(orderStatus)
  return (
    <div>
      <SuccessIcon/>
      <span>Pedido confirmado</span>
      <span>Orden #{orderId}</span>
      <span>
          
        {
          flag === 'takeAway' ? message.toTakeAway:
          message.toHome 
            
        }

      </span>
    </div>
  )
}
 