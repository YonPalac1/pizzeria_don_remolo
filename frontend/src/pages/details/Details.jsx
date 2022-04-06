import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/navigation/Navigation";
import { CartDetails } from "../../components/cartDetails/CartDetails";
import { useDispatch, useSelector } from "react-redux";
import { shippingAction } from "../../redux/cartReducer";
import useForm from "../../hooks/useForm";
import "./details.css";

export const Details = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.cart.info);
  const [formValues, handleChange] = useForm({ email: "", password: "" });
  const { email, password } = formValues;
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [readonlyActive, setReadonlyActive] = useState(true);
  const [option, setOption] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (option) {
      setNext(true);
    }
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

  const handleEdit = (value) => {
  };

  const handleSubmit = () => {
    if (next) {
      dispatch(shippingAction(option));
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <>
      <Navigation />
      <div className="authentication">
        <div className="authentication-column">
          <form>
            <div className="details">
              <div className="details_info">
                <div>
                  <h5>Nombre </h5>
                  <input
                    type="text"
                    value={contact.name}
                    className="unactive"
                    readOnly
                  />
                  <button
                    onClick={() => handleEdit(contact.name)}
                    className="edit"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <h5>Telefono </h5>
                  <input
                    type="text"
                    value={contact.celphone}
                    className="unactive"
                  />
                  <button
                    onClick={() => handleEdit(contact.celphone)}
                    className="edit"
                  >
                    Edit
                  </button>
                </div>

                <div>
                  <h5>Dirección </h5>
                  <input
                    type="text"
                    value={contact.address}
                    className="unactive"
                  />
                  <button
                    onClick={() => handleEdit(contact.address)}
                    className="edit"
                  >
                    Edit
                  </button>
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
          </form>
        </div>

        <CartDetails />
      </div>
    </>
  );
};
