import React from 'react'
import PropTypes from 'prop-types'
import { ordersLastsRequest,ordersLastsRequestTittles } from '../../../utils/OrdersControl.util'
import { TrLastRequest, } from './TrLastRequest/TrLastRequest'
import { TitleRequestTable } from './TitleRequestTable/TitleRequestTable'
import './LastRequestTable.css'

export const LastRequestTable = props => {






    return (
        <table className='table-request'>
            <span className='title-request'>Ultimos pedidos</span>
            
            <div className='div-item-request'>
                {
                    ordersLastsRequestTittles.map(item => {
                        return <TitleRequestTable item={item.item} position={item.position} />
                    })
                } 
            </div>
         
            {
                ordersLastsRequest.map(orderObj => {
                    return <TrLastRequest orderObj={orderObj} />
                })
            }


        </table>
    )

}

LastRequestTable.propTypes = {}

