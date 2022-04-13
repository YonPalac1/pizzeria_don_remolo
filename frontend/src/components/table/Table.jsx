import React from 'react';
import Tr from './tr/Tr';
import './Table.css'

export default function Table({orders}) {
 
  return (
    <table className='table'>

        {
            orders.map(orderObj => {
                return  <Tr orderObj={orderObj} /> 
            })
        }


    </table>
  )
}
