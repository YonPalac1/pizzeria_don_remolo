import React from 'react'
import PropTypes from 'prop-types'
import './TrDelivery.css'

export const TrDelivery = ({ orderObj }) => {
    // const { picture, delivery, time, status, orderStatus } = orderObj

    const { address, celphone, menu, name, note, status, total, _id } = orderObj

    const picture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZsbe7GUxdCRmqUBxV60xV7Bdq5qm6bzNyhWAHCJbm9corKmWkANQv6pfNU3jFvtE&usqp=CAU'
    const state = 'Pendiente'
    const delivery = 'Carlos Ramirez'




    const handleDelete = () => {
        console.log('delete')
    }

    const handleAdd = () => {
        console.log('add')
    }

    return (
        <>
            <tr className='tr-delivery'>
                <img className='img-td-delivery' src={picture} alt="image" />
                <div className='container-delivery'>
                    <td className='font-mobile-delivery'>{delivery}</td>
                    <td className='status-delivery font-mobile-delivery'>${total}</td>
                </div>

                <td className='td-delivery font-mobile-delivery time-delivery'>{address}</td>
                <div className='font-mobile-delivery container-buttons-delivery'>
                    <span className='span-delivery hover-delivery' onClick={handleAdd}>
                        <Check />
                    </span>

                    <span className='span-delivery hover-delivery' onClick={handleDelete}>
                        <Remove />
                    </span>
                </div>
            </tr>

        </>
    )
}

TrDelivery.propTypes = {
    orderObj: PropTypes.object
}


const Check = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='green  mobile-delivery'>
            <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
        </svg>
    )
}

const Remove = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='red  mobile-delivery'>
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
        </svg>
    )
}
