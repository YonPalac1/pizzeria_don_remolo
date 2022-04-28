import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";


import { allOrdersAction } from '../../../redux/orderReducer.js'
import './OrdersConstrol.css'
import { tittlesValues } from '../../../utils/OrdersControl.util'
import {Table} from '../../table/Table.jsx'
import { Search } from '../../search/Search'
import { SearchButton } from '../../searchButton/SearchButton'
import { useDispatch } from 'react-redux'
import { allOrdersAction } from '../../../redux/orderReducer'

export const OrdersControl = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    
    useEffect(() => {
        dispatch(allOrdersAction());
      }, []);
    
      useEffect(() => {
        console.log(orders)
       }, [orders]);
    


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
