import React from 'react'
import { OrdersControl } from '../../components/Backoffice/ordersControl/OrdersControl'
import { RecentOrders } from '../../components/Backoffice/ordersControl/RecentOrders'

export const Backoffice = () => {
  return (
  <>
    <RecentOrders />
    <OrdersControl/>
  </>
  )
}
