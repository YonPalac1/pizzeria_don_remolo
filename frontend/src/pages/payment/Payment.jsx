import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/navigation/Navigation";
import { CartDetails } from "../../components/cartDetails/CartDetails";
import { checkoutAction, saveOrder } from "../../redux/cartReducer";
import "./payment.css";

export const Payment = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.cart.info);
  const total = 200;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkoutAction(contact));

    let value = contact;

    Object.defineProperty(value, "total", {
      value: total,
      writable: true,
      enumerable: true,
      configurable: true,
    });

    dispatch(saveOrder(value));
  };

  //   "name": "emanuel",
  //   "lastname0" : "constancio",
  //   "celphone": 156080087,
  //   "address": "puan3280",
  //   "note": "I want the pizza with a lot of cheese",
  //   "total": 150

  return (
    <>
      <Navigation />
      <div className="authentication">
        <div className="authentication-column">
          <form>
            <div className="details">
              <div className="details_info">
                <div>
                  <h5>
                    Nombre <span> {contact.name}</span>
                  </h5>
                </div>
                <div>
                  <h5>
                    Telefono <span> {contact.celphone}</span>
                  </h5>
                </div>

                <div>
                  <h5>
                    Dirección<span> {contact.address}</span>
                  </h5>
                </div>

                <div>
                  <h5>
                    Metodo de pago <span> Efectivo</span>
                  </h5>
                </div>
              </div>

              <div className="details_details">
                <div onClick={handleSubmit} className="pay_method">
                  <Link className="pay_method" to="/success">
                    Realizar pago
                  </Link>
                </div>
              </div>
              <div className="details-footer">
                <Link to="/details">Volver a los detalles</Link>
              </div>
            </div>
          </form>
        </div>

        <CartDetails />
      </div>
    </>
  );
};
