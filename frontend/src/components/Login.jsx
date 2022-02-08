import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../redux/reducer';

export const Login = () => {
  const dispatch = useDispatch()

  const initialForm = {
    email: "",
    password: ""
  };
  const [form, setForm] = useState(initialForm)
  const isError = useSelector(state => state.data.isError)
  const errors = useSelector(state => state.data.errors)

  useEffect(() => {
    setForm(initialForm)
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginAction(form))
  }



  return <>
      <form onSubmit={handleSubmit} className='form_login'>
          
          <label htmlFor="email">Email</label>
          <input id='email' 
          name="email"
          type="email"
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
          ></input>

          <div className="text-danger">{errors.email?.msg}</div>

          <label htmlFor="password">Contraseña</label>
          <input id='password' 
          type="password"
          name="password"
          placeholder='Contraseña'
          value={form.password}
          onChange={handleChange}
          ></input>

          <div className="text-danger">{errors.password?.msg}</div>


          <button type='submit'>Ingresar</button>
      </form>
  </>;
};
