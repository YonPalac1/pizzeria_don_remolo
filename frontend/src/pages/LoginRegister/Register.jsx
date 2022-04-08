import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/authReducer";
import useForm from "../../hooks/useForm";
import "./forms.css";

export const Register = () => {
  const dispatch = useDispatch();
  const [formValues, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    rol: 1,
  });
  const { name, email, password } = formValues;
  const [errorPass2, setErrorPass2] = useState();
  const errors = useSelector((store) => store.auth.errors);
  const pass1 = useRef();

  const handleChangePass2 = (e) => {
    setErrorPass2(
      pass1.current?.value !== e.target.value
        ? "Las contraseñas no coinciden"
        : ""
    );
  };
  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(formValues));
  };

  return (
    <div className="form-container">
      <div className="form-container_text">
        <h3>Crear cuenta</h3>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="form_login">
          <div className="inputs">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
              id="name"
              maxlength="15"
            />
            <div className="text-danger">{errors && errors["name"]?.msg}</div>
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              id="email"
            />
            <div className="text-danger">{errors && errors["email"]?.msg}</div>
          </div>

          <div className="inputs">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              ref={pass1}
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              id="password"
            />
            <div className="text-danger">
              {errors && errors["password"]?.msg}
            </div>
          </div>

          <div className="inputs">
            <label htmlFor="password">Confirme la contraseña</label>
            <input
              type="password"
              name="password_confirm"
              placeholder="Enter confirm password"
              id="confirm_password"
              onChange={handleChangePass2}
            />
            <div className="text-danger">{errorPass2}</div>
          </div>

          <div className="inputs">
            <button type="submit">Registrarse</button>
          </div>
        </form>
        <div className="form-container_img">
          <img src="./images/logo.png"></img>
        </div>
      </div>
    </div>
  );
};
