import React from 'react';
import { Link } from 'react-router-dom';
import './loginRegister.css'

export const LoginRegister = () => {
  return <>
    <Link className='buttonsSigin' to='/register'>Registrarse</Link>
    <Link className='buttonsSigin' to='/login'>Ingresar</Link>
  </>
}