import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/navigation/Navigation";
import { CartDetails } from "../../components/cartDetails/CartDetails";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalSend, shippingAction } from "../../redux/cartReducer";
import { infoAction } from '../../redux/cartReducer';
import "./details.css";

export const Details = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.cart.info);
  const formValues = {
    name: contact.name,
    celphone: contact.celphone,
    address: contact.address,
  };
  const [form, setForm] = useState(formValues);
  const [active, setActive] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [option, setOption] = useState("delivery");
  const [errorMsg, setErrorMsg] = useState(false);
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (option) {
      setNext(true);
    }
    dispatch(shippingAction(option))
  }, [contact, option]);

  const handleCheck = (e) => {
    setCheck2(false);
    setCheck1(true);
    setOption(e.target.name);
  };
  const handleCheck2 = (e) => {
    setCheck2(true);
    setCheck1(false);
    setOption(e.target.name);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (value) => {
    let button = document.querySelector(`#${value}`)
    let input = document.querySelector(`input#${value}_input`)
    
    if(!active){
      input.removeAttribute("disabled");
      button.setAttribute("style", "color: green");
      setActive(true)
    } else {
      input.setAttribute("disabled", "");
      button.removeAttribute("style");
      setActive(false)
      
      dispatch(infoAction(form))
    }
    
  };

  const handleSubmit = () => {
    if (next) {
      if(option === "delivery"){
        dispatch(shippingAction(option));
        dispatch(calculateTotalSend(130))
      } else {
        dispatch(shippingAction(option));
      }
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <>
      <Navigation />
      <div className="authentication">
        <div className="authentication-column">
          <div className="details">
            <div className="details_info">
              <div>
                <h5>Nombre </h5>
                <input type="text"
                  name="name"
                  id="name_input"
                  value={form.name}
                  onChange={handleChange}
                  disabled
                />
                <input type="button" onClick={(value) => handleEdit("name")} className="edit" value="Edit" id="name" />
              </div>
              <div>
                <h5>Telefono </h5>
                <input type="text" 
                name="celphone"
                id="celphone_input"
                value={form.celphone}
                onChange={handleChange}
                disabled />
                <input type="button" onClick={(value) => handleEdit("celphone")} className="edit" value="Edit" id="celphone" />
              </div>

              <div>
                <h5>Dirección </h5>
                <input type="text" 
                name="address"
                id="address_input"
                value={form.address}
                onChange={handleChange}
                disabled />
                <input type="button" onClick={(value) => handleEdit("address")} className="edit" value="Edit" id="address" />
              </div>
            </div>

            <div className="details_details">
              <h5>Metodo de envio</h5>
              <div>
                <p>
                  <input
                    id="local"
                    type="checkbox"
                    name="local"
                    onChange={handleCheck}
                    checked={check1}
                  />
                  <label htmlFor="local">Retirar en el local</label>
                </p>
                <span>Gratis</span>
              </div>
              <div>
                <p>
                  <input
                    id="del"
                    type="checkbox"
                    name="delivery"
                    onChange={handleCheck2}
                    checked={check2}
                  />
                  <label htmlFor="del">Delivery</label>
                </p>
                <span>$ 130</span>
              </div>
            </div>
          </div>
          <div>
            {errorMsg && (
              <span className="errorMsg">
                Debe llenar todos los campos para continuar
              </span>
            )}
          </div>

          <div className="details-footer">
            <Link to="/cart">Volver al carrito</Link>
            {!next ? (
              <Link onClick={handleSubmit} to="/details" className="btn-send">
                Ir a pagar
              </Link>
            ) : (
              <Link onClick={handleSubmit} to="/payment" className="btn-send">
                Ir a pagar
              </Link>
            )}
          </div>
        </div>

        <CartDetails />
      </div>
    </>
  );
};
