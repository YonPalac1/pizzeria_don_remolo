import React from 'react'

export const Total = ({totals}) => {
  return (
    <>
        <h5>Total</h5>
        {!totals ?
            <span>$ 0</span>
        :
            <span>$ {totals}</span>
    }
    </>
  )
}

