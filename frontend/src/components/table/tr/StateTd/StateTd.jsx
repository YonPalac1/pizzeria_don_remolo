import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './StateTd.css'

export const StateTd = ({ state }) => {

    const [color, setColor] = useState('')

    const handleColor = () => {

        const value = state.toLowerCase()
            switch (value) {
                case 'enviado':
                    
                    setColor('green')
                    break;
        
                case 'pendiente':
                    setColor('yellow')
                    break;
        
                case 'cancelado':
                    setColor('red')
                    break;
        
                default:
                    setColor('broken')
                    break;
            }


    }

    useEffect(() => {
        handleColor()
    }, [])
    
    return (
        <td className={color}>{state}</td>
    )
}

StateTd.propTypes = {
    state: PropTypes.string

}




