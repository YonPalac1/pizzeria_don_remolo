import React, { useEffect, useState } from 'react'


import './OrdersConstrol.css'

import { orders,  tittlesValues } from '../../../utils/OrdersControl.util'
import {Table} from '../../table/Table'
import { Search } from '../../search/Search'
import { SearchButton } from '../../searchButton/SearchButton'
import { useDispatch } from 'react-redux'
import { allOrdersAction } from '../../../redux/orderReducer'


export const OrdersControl = () => {
    const disparch = useDispatch()
    const orders = useState(state => state.orders.orders)

    useEffect(()=>{
        dispatchEvent(allOrdersAction())
    }, [])

    useEffect(()=>{
        console.log(orders)
    }, [orders])



    return (
        <div className='main-div-orders-control'>

            <div className='div-item-search'>
                {
                    tittlesValues.map(item => {
                        return <SearchButton item={item.item} />
                    })
                }
            </div>


            <div className='child-div-content'>


                <Table orders={orders} />



            </div>

        </div>
    )
}
