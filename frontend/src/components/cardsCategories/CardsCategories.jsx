import React from 'react'

export const CardsCategories = ({bg, name}) => {
  return (
    <div className='categories-cards'>
        <div className={`categorie-card ${bg}`}>
            <span>{name}</span>
            <div className='categorie-card_img'>
                <div className='img'></div>
            </div>
        </div>
    </div>
  )
}
