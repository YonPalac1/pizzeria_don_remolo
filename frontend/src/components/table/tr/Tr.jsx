import React, { useEffect } from 'react'
import './tr.css'
import { StateTd } from './StateTd/StateTd'
import { withGetScreen } from 'react-getscreen'
import { DateTd } from './DateTd/DateTd'

export default function Tr({ orderObj }) {




     const { address, celphone, menu, name, note, status, total, _id } = orderObj

    const picture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZsbe7GUxdCRmqUBxV60xV7Bdq5qm6bzNyhWAHCJbm9corKmWkANQv6pfNU3jFvtE&usqp=CAU'
    const state = 'Pendiente'
    const type = 'Delivery'



    return (
        <>
            <tr className='tr-pedidos'>
                {/* <img className='img-td-pedidos' src={picture} alt="image" /> */}
                <td className='td-pedidos client-pedidos font-mobile-pedidos'>{name}</td>
                <td className='td-pedidos date-pedidos font-mobile-pedidos'>{note}</td>
                <StateTd state={state} />
                <td className='td-pedidos total-pedidos font-mobile-pedidos'>${total}</td>
                <StateTd state={type} />
            </tr>

        </>
    )
}
