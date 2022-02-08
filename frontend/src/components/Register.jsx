import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { registerAction } from '../redux/reducer';

export const Register = () => {
  const dispatch = useDispatch()
  const initialForm = {
    name: "",
    email: "",
    password: "",
    rol: 1
  };
  const [form, setForm] = useState(initialForm)
  const [password_confirm, setPassword_confirm] = useState("")
  const [error, setError] = useState({})
  
  useEffect(() => {
    setForm(form)
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
    
    if(validate()){
      dispatch(registerAction(form))
    }
  }

  function validate(){
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

      setError(errors)

      return isValid;
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
            <div className="text-danger">{error.name}</div>
              
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{error.email}</div>
   
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              name="password" 
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password" 
              id="password" />
              <div className="text-danger">{error.password}</div>
  
  
            <label htmlFor="password">Confirme la contraseña</label>
            <input 
              type="password" 
              name="password_confirm"
              value={password_confirm}
              onChange={(e)=>setPassword_confirm(e.target.value)}
              placeholder="Enter confirm password" 
              id="confirm_password" />
              <div className="text-danger">{error.password_confirm}</div>
  
              
          <button type="submit">Registrarse</button>
        </form>
      </div>;
};

