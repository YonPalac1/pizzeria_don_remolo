import React from 'react'
import Table from '../table/Table'

export default function OrdersControl() {

    const tittlesValues = [  {

        order: 'N° de Orden',
    },
    {
        client: 'Cliente'
    },
    {
        orderState: 'Estado de pedido'
    },
    {
        paymentState: 'Estado de pago'
    },
    {
        total: 'Total'
    }
]


const orders = [  {

    order: 'S000083',
    client: 'Ramiro Gonzalez',
    orderState: 'delivered',
    paymentState: 'paid',
    total : 6000
},
{
    order: 'S000083',
    client: 'Ramiro Gonzalez',
    orderState: 'delivered',
    paymentState: 'paid',
    total : 6000
},
{
    order: 'S000083',
    client: 'Ramiro Gonzalez',
    orderState: 'delivered',
    paymentState: 'paid',
    total : 6000
},
{
    order: 'S000083',
    client: 'Ramiro Gonzalez',
    orderState: 'delivered',
    paymentState: 'paid',
    total : 6000
},
{
    order: 'S000083',
    client: 'Ramiro Gonzalez',
    orderState: 'delivered',
    paymentState: 'paid',
    total : 6000
}


]






  return (
      <div>
          
    <div className='main-div-orders-control'>
        
        {
            tittlesValues.map(tittle => {
                return <span>{tittle} </span>
            })
        }

    </div>

        <Table orders={orders} />

    </div>
  )
}
