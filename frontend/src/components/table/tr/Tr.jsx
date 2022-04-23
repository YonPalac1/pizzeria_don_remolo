import React, { useEffect } from 'react'
import './tr.css'
import { StateTd } from './StateTd/StateTd'
import { withGetScreen } from 'react-getscreen'
import { DateTd } from './DateTd/DateTd'

export default function Tr({ orderObj }) {




    const { picture, client, date, state, price, type } = orderObj


    return (
        <>
            <tr className='tr'>
                <img className='img-td' src={picture} alt="image" />
                <td className='client font-mobile'>{client}</td>
                <td className='date font-mobile'>{date}</td>
                <StateTd state={state} />
                <td className='total font-mobile'>${price}</td>
                <StateTd state={type} />
            </tr>

        </>
    )
}
