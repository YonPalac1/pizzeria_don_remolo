import React from 'react'
import './tr.css'
export default function Tr({orderObj}) {


    const { order,client,orderState,paymentState,total } = orderObj
    

    return (
        <tr className='tr'>
            <td className='order'>{order}</td>
            <td className='client'>{client}</td>
            <td className='orderState'>{orderState}</td>
            <td className='paymentState'>{paymentState}</td>
            <td className='total'>${total}</td>
         
        </tr>
    )
}
