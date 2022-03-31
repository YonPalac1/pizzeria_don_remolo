import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/authReducer";
import useForm from "../../hooks/useForm";
import "./forms.css";

export const Login = () => {
  const dispatch = useDispatch();
  const [formValues, handleChange] = useForm({ email: "", password: "" });
  const { email, password } = formValues;
  const errors = useSelector((state) => state.auth.errors);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginAction(formValues));
  };

  return (
    <div className="form-container">
      <div className="form-container_text">
        <h3>Ingresa</h3>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="form_login">
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            ></input>
            <div className="text-danger">{errors && errors["email"]?.msg}</div>
          </div>

          <div className="inputs">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={handleChange}
            ></input>
            <div className="text-danger">
              {errors && errors["password"]?.msg}
            </div>
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
