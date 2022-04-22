import React from 'react'
import './tr.css'
import {StateTd} from './StateTd/StateTd'


export default function Tr({orderObj}) {


    const { picture, client, date, state, price, type } = orderObj
    

    return (
        <tr className='tr'>
            <img className='img-td' src={picture} alt="image" />
            <td className='client'>{client}</td>
            <td className=''>{date}</td>
            <StateTd state={state}/>
            <td className='total'>${price}</td>
            <td className=''>{type}</td>
        </tr>
    )
}
