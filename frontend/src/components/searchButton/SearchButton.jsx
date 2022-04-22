import React from 'react'

import './SearchButton.css';

export const SearchButton = ({item})=> {

    const callApi = () => {
        console.log('workink...')
    }

  return (
    <span onClick={callApi} className='item-Search-button'>
        {item}
    </span>
  )
}
