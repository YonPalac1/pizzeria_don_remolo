import React from 'react'
import Table from '../table/Table'

import './OrdersConstrol.css'

import { orders, tittlesValues } from '../../utils/OrdersControl.util'


export default function OrdersControl() {






    return (
        <div className='main-div-orders-control'>

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
