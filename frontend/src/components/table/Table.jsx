import React from 'react';
import Tr from './tr/Tr';

export default function Table({orders}) {
  return (
    <table class="default">

        {
            orders.map(order => {
                return  <Tr order={order} /> 
            })
        }


    </table>
  )
}
