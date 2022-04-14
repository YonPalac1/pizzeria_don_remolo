import React from 'react'

export const SearchButton = ({item})=> {

    const callApi = () => {
        console.log('workink...')
    }

  return (
    <span onClick={callApi}>
        {item}
    </span>
  )
}
