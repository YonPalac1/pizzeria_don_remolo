import React, { useState } from 'react'
import './Subscribe.css'

export const Subscribe = () => {

    const [inputValue, setInputValue] = useState('Escribe tu email para recibir ofertas')
    const [Error, setError] = useState(false);



    const handleChange = e => setInputValue(e.target.value);

    const handleSubscribe = () => {
        setInputValue('');
        if (!handleError(inputValue)) return;
        if (!setError) return;

        //Calll api;
    }

    const handleError = email => {
        const regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

        if (!regEx.test(email)) {
            setError(true)
            return true
        } else {
            setError(false);
            return false;
        }

    }



    const ErrorMessage = () => {
        if (Error) return <span className='error'>Por favor ingrese un email válido</span>;

    }

    return (

        <div>
            {ErrorMessage()}
            <div className='email'>
                <input type="text" value={inputValue} className='input' onChange={handleChange} />
                <button onClick={handleSubscribe} className='button'>Subscribe</button>
            </div>
        </div>

    )
}


