import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='circle-notFound'>
                <span className='span404' data-end="4">40</span>
                <span className='spanMessage404'>Parece que estas perdido.</span>
                <span className='spanMessageOpps'>Oops! La página que estas buscando no existe.</span>
                <Link className='button404' to='/'>Volver al home</Link>
            </div>
        </div>
    )
}

