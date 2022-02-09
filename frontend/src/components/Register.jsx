import React, {useState, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from '../redux/reducer';

export const Register = () => {
  const password_confirm = useRef()

  const dispatch = useDispatch()

  const initialForm = {
    name: "",
    email: "",
    password: "",
    rol: 1
  };
  const [form, setForm] = useState(initialForm)
  const errors = useSelector(store=>store.data.errors)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerAction(form))
    
  }

  return <div>
        <form onSubmit={handleSubmit} className="form_login">
            <label htmlFor="name">Nombre</label>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name" 
              id="name" />
         <div className="text-danger">{errors && errors['name']?.msg}</div>
              
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email" 
              id="email" />
  
             <div className="text-danger">{errors && errors['email']?.msg}</div>
   
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              name="password" 
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password" 
              id="password" />
              <div className="text-danger">{errors && errors['password']?.msg}</div>
  
  
            <label htmlFor="password">Confirme la contraseña</label>
            <input 
              type="password" 
              name="password_confirm"
              ref={password_confirm}
              placeholder="Enter confirm password" 
              id="confirm_password" />
             <div className="text-danger">{errors && errors['password']?.value !== password_confirm.current?.value && "Las contraseñas no coinciden"}</div>
  
              
          <button type="submit">Registrarse</button>
        </form>
      </div>;
};

