import React from 'react'
import Table from '../../table/Table'

import './OrdersConstrol.css'

import { orders,  tittlesValues } from '../../../utils/OrdersControl.util'
import { Search } from '../../search/Search'
import { SearchButton } from '../../searchButton/SearchButton'


export const OrdersControl = () => {






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
