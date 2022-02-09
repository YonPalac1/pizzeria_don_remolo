import React, {useState, useEffect, useRef} from 'react';
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

 /*   function validate(){
      let input = form;
      let errors = {};
      let isValid = true;

      if (!input.name) {
        isValid = false;
        errors.name = "Por favor ingrese su nombre";
      }

      if (!input.email) {
        isValid = false;
        errors.email = "Por favor ingrese su email.";
      }

      if (!input.password) {
        isValid = false;
        errors.password = "Por favor ingrese su contraseña.";
      }
  
      if (!password_confirm) {
        isValid = false;
        errors.password_confirm = "Por favor confirme la contraseña.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof password_confirm !== "undefined") {
          
        if (input.password !== password_confirm) {
          isValid = false;
          errors.password_confirm = "Las contraseñas no coinciden.";
        }
      } 

      return isValid;
  } */

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
         <div className="text-danger">{errors['name']?.msg}</div>
              
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email" 
              id="email" />
  
             <div className="text-danger">{errors['email']?.msg}</div>
   
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              name="password" 
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password" 
              id="password" />
              <div className="text-danger">{errors['password']?.msg}</div>
  
  
            <label htmlFor="password">Confirme la contraseña</label>
            <input 
              type="password" 
              name="password_confirm"
              ref={password_confirm}
              placeholder="Enter confirm password" 
              id="confirm_password" />
             <div className="text-danger">{errors['password']?.value !== password_confirm.current?.value && "Las contraseñas no coinciden"}</div>
  
              
          <button type="submit">Registrarse</button>
        </form>
      </div>;
};

