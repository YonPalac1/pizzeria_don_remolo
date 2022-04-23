import React, { useEffect } from 'react'
// import './tr.css'
import { StateTd } from './StateTd/StateTd'
import { withGetScreen } from 'react-getscreen'
import { DateTd } from './DateTd/DateTd'

export default function Tr({ orderObj }) {




    const { picture, client, date, state, price, type } = orderObj


    return (
        <>
            <tr className='tr-pedidos'>
                <img className='img-td-pedidos-pedidos' src={picture} alt="image" />
                <td className='td-pedidos client-pedidos font-mobile-pedidos'>{client}</td>
                <td className='td-pedidos date-pedidos font-mobile-pedidos'>{date}</td>
                <StateTd state={state} />
                <td className='td-pedidos total-pedidos font-mobile-pedidos'>${price}</td>
                <StateTd state={type} />
            </tr>

        </>
    )
}
