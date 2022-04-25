import React from 'react'
import PropTypes from 'prop-types'
import './TrLastRequest.css'

export const TrLastRequest = ({ orderObj }) => {
    const { picture, client, date, payment, address,order } = orderObj



    return (
        <>
            <tr className='tr-request'>
                <img className='img-td-request' src={picture} alt="image" />
                <td className='td-request font-mobile-request time-request'>{client}</td>
                <td className='td-request font-mobile-request time-request'>{order}</td>
                <td className='td-request font-mobile-request time-request'>{date}</td>
                <td className='td-request font-mobile-request time-request'>{payment}</td>
                <td className='td-request font-mobile-request time-request'>{address}</td>
            </tr>
        </>
    )
}

TrLastRequest.propTypes = {
    orderObj: PropTypes.object
}


 