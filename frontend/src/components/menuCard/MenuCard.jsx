import React from 'react'

export const MenuCard = () => {
  return (
    <div className='menu-card'>
          <div className='menu-card_img'></div>
          <div className='menu-card_details'>
              <span>Muzarella</span>
              <p>Salsa, muzzarella, aceintunas, oregano.</p>
              <b>$ 700.00</b>
          </div>
          <div className='menu-card_btns'>
              <button className='btn-add'>+</button>
          </div>
      </div>
  )
}
