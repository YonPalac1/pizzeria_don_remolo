import React from 'react'
import { RecentOrders } from '../../components/Backoffice/ordersControl/RecentOrders'
import { OrdersControl } from '../../routes'

export const Backoffice = () => {
  return (
  <>
    <RecentOrders />
    <OrdersControl/>
  </>
  )
}
