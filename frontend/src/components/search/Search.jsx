import React from 'react'
import './Search.css'

export const Search = () => {



    return (
        <div className='div-main-search'>
            <input className='search-input' type="text" placeholder='Seach' />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 0.5C10.976 0.5 14 3.524 14 7.25C14 10.976 10.976 14 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5ZM7.25 12.5C10.1503 12.5 12.5 10.1503 12.5 7.25C12.5 4.349 10.1503 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1503 4.349 12.5 7.25 12.5ZM13.6138 12.5533L15.7355 14.6743L14.6743 15.7355L12.5533 13.6138L13.6138 12.5533Z" fill="#363231" />
            </svg>
        </div>
    )
}
