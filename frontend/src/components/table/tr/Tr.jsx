import React from 'react'
 
export default function Tr({order}) {


    const { order,client,orderState,paymentState,total } = order


    return (
        <tr>
            <td>{order}</td>
            <td>{client}</td>
            <td>{orderState}</td>
            <td>{paymentState}</td>
            <td>{total}</td>
         
        </tr>
    )
}
