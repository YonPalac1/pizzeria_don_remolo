import React from 'react'

export const HeaderCarousel = () => {
  return (
    <header className="header">
        <section className='header-column_titles'>
            <div className='titles'>
                <h1>Sabores caseros</h1>
                <h3>La mejor pizza a domicilio</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit id enim non morbi aliquet id quis. Vivamus pretium dolor vitae netus ut laoreet nisl quisque.</p>
            </div>
        </section>
        <section className='header-column_carousel'>
            <div className='circle-bg'></div>
            <div className='carousel'>
              <div className='carousel-central-img'></div>
            </div>
        </section>
    </header>
  )
}
