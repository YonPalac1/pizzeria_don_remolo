import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allOrdersConfirmed } from '../../../redux/orderReducer';

import './OrdersConstrol.css'
import { tittlesValues } from '../../../utils/OrdersControl.util'
import {Table} from '../../table/Table'
import { Search } from '../../search/Search'
import { SearchButton } from '../../searchButton/SearchButton'

export const OrdersControl = () => {


    const orders = useSelector((state) => state.order.ordersConfirm);



    return (
        <div className='main-div-orders-control'>

            <div className='div-item-search'>
                {
                    tittlesValues.map(item => {
                        return <SearchButton item={item.item} key={item.id} />
                    })
                }
            </div>


            <div className='child-div-content'>


                <Table orders={orders} />



            </div>

        </div>
    )
}
