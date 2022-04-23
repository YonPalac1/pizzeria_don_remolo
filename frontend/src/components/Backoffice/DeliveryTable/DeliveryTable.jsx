import React from 'react'
import PropTypes from 'prop-types'
import './DeliveryTable.css'
import { ordersDelivery } from '../../../utils/OrdersControl.util'
import { TrDelivery } from './TrDelivery/TrDelivery'


export const DeliveryTable = () => {
    return (
        <>
            
            <table className='table-delivery'>
            <span className='title-delivery'>Delivery</span>
                {
                    ordersDelivery.map(orderObj => {
                        return <TrDelivery orderObj={orderObj} />
                    })
                }


            </table>
        </>
    )
}

DeliveryTable.propTypes = {

}

// react arrow funtional component propTypes  RAFCP

