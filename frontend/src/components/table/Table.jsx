import React, { useEffect } from 'react';
import Tr from './tr/Tr';
import './Table.css'

export const Table = ({ orders }) => {

    // picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgO3fm3d_UcdvascBahHhqu3z-uXB-mUzQg&usqp=CAU',
    // client: 'Martin Salem',
    // date: '10 abr, 2022',
    // state: 'enviado',
    // price: '2.100',
    // type: 'Retirar en el local'
    useEffect(() => {
        console.log(orders)
    }, [])


    return (
        <table className='table-pedidos'>

            {
                orders.map(orderObj => {
                    return <Tr orderObj={orderObj} />
                })
            }


        </table>
    )
}
