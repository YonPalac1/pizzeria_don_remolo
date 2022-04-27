import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import { ordersLastsRequest,ordersLastsRequestTittles } from '../../../utils/OrdersControl.util'
import { TrLastRequest, } from './TrLastRequest/TrLastRequest'
import { TitleRequestTable } from './TitleRequestTable/TitleRequestTable'
import './LastRequestTable.css'

export const LastRequestTable = props => {


    
    const orders = useSelector((state) => state.order.ordersConfirm);






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
                orders.map(orderObj => {
                    return <TrLastRequest orderObj={orderObj} />
                })
            }


        </table>
    )

}

LastRequestTable.propTypes = {}

