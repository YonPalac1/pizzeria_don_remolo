import React from 'react'
import Table from '../table/Table'

import './OrdersConstrol.css'

import { orders, tittlesValues,searchUsingButton } from '../../utils/OrdersControl.util'
import {Search} from '../search/Search'
import {SearchButton} from '../searchButton/SearchButton'


export default function OrdersControl() {






    return (
        <div className='main-div-orders-control'>
            <div>
                <Search/>

                <div >
                   {
                       searchUsingButton.map(item => {
                        return <SearchButton item={item.item}/>
                       })
                   }
                </div>
                
            </div>
            <div className='child-div-content'>
                <div className='child-div-orders-control'>

                    {
                        tittlesValues.map(title => {
                            return <span>{title.title} </span>
                        })
                    }

                </div>

                <Table orders={orders} />



            </div>

        </div>
    )
}
