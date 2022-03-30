import React from 'react'
import { ItemFooter } from '../ItemFooter/ItemFooter'


export const ItemMap = ({array}) => {
  return (
    <>
       {
                
                array.map(item => {
                    return <ItemFooter key={item.sentence} item={item} />
                })
            }
    </>
  )
}
 