import React from 'react'
import PropTypes from 'prop-types'
import './DeliveryTable.css'
import { ordersDelivery } from '../../../utils/OrdersControl.util'
import { TrDelivery } from './TrDelivery/TrDelivery'


export const DeliveryTable = () => {
    return (
        <>
             <span className='title-delivery'>Delivery</span>
            <table className='table-delivery'>
           
                {
                    ordersDelivery.map(orderObj => {
                        return <TrDelivery orderObj={orderObj} key={orderObj.time} />
                    })
                }


            </table>
        </>
    )
}

DeliveryTable.propTypes = {

}

// react arrow funtional component propTypes  RAFCP

