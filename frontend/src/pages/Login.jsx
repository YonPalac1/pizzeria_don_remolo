import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../redux/authReducer';
import useForm from '../hooks/useForm'


export const Login = () => {
    const dispatch = useDispatch()
    const [formValues, handleChange] = useForm({ email: '', password: '' })
    const { email, password } = formValues;
    const errors = useSelector(state => state.auth.errors)

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(loginAction(formValues))
    }

    return <>
        <form onSubmit={handleSubmit} className='form_login'>

            <label htmlFor="email">Email</label>
            <input
                id='email'
                name="email"
                type="email"
                placeholder='Email'
                value={email}
                onChange={handleChange}
            ></input>

            <div className="text-danger">{errors && errors["email"]?.msg}</div>

            <label htmlFor="password">Contraseña</label>
            <input 
                id='password'
                type="password"
                name="password"
                placeholder='Contraseña'
                value={password}
                onChange={handleChange}
            ></input>

            <div className="text-danger">{errors && errors["password"]?.msg}</div>


            <button type='submit'>Ingresar</button>
        </form>
    </>;
};