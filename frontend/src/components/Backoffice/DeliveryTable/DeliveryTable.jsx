

import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";


import PropTypes from 'prop-types'
import './DeliveryTable.css'
// import { ordersDelivery } from '../../../utils/OrdersControl.util'
import { TrDelivery } from './TrDelivery/TrDelivery'
import { allOrdersConfirmedAction } from '../../../redux/orderReducer.js'


export const DeliveryTable = () => {


    const dispatch = useDispatch();
    const ordersConfirm = useSelector((state) => state.order.ordersConfirm);
    const orders = useSelector((state) => state.order.ordersRetire);

    useEffect(() => {
        dispatch(allOrdersConfirmedAction());
      }, []);
    
      useEffect(() => {}, [orders, ordersConfirm]);
    

    return (
        <div className='main-div-delivery'>
            <span className='title-delivery'>Delivery</span>
            <table className='table-delivery'>
           
                {
                    orders.map(orderObj => {
                        return <TrDelivery orderObj={orderObj} key={orderObj.time} />
                    })
                }


            </table>
        </div>
    )
}

DeliveryTable.propTypes = {

}

// react arrow funtional component propTypes  RAFCP

