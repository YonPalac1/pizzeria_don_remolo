import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../../components/navigation/Navigation'
import { CartDetails } from '../../components/cartDetails/CartDetails'
import { useDispatch } from "react-redux";
// import useForm from '../../hooks/useForm'
import { infoAction } from '../../redux/cartReducer';
import './cart.css'

export const Cart = () => {
    const dispatch = useDispatch();
    const initialForm = { celphone: "", name: "", lastname: "", address: "", note: "" };
    const [form, setForm] = useState(initialForm);
    const [errorMsg, setErrorMsg] = useState(false);
    const [next, setNext] = useState(false);


    useEffect(() => {

    }, [form])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        if (form.name !== "" &&
            form.celphone !== "" &&
            form.lastname !== "" &&
            form.address !== "") {
            setNext(true)
        }

    };

    const handleSubmit = () => {
        if (next) {
            dispatch(infoAction(form))
        } else {
            setErrorMsg(true)
        }
    }

    return (
        <>
            <Navigation />
            <div className='cart'>
                <div className='cart-column'>
                    <form>
                        <div className='cart-body'>
                            <h5>Contacto</h5>
                            <div className='cart-body_input names'>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder='Nombre'
                                ></input>

                                <input
                                    name="lastname"
                                    value={form.lastname}
                                    onChange={handleChange}
                                    placeholder='Apellido'
                                ></input>
                            </div>
                            <div className='cart-body_input'>
                                <input
                                    name="celphone"
                                    value={form.celphone}
                                    onChange={handleChange}
                                    placeholder='Numero de celular'
                                ></input>

                                <p>
                                    <input type="checkbox" id='checkbox'></input>
                                    <label htmlFor="checkbox"> Agregarme al newsletter para un 10% de descuento</label>
                                </p>
                            </div>

                            <h5>Dirección</h5>
                            <div className='cart-body_input'>
                                <input
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder='Nombre de la calle'></input>

                                <input
                                    name="note"
                                    value={form.note}
                                    onChange={handleChange}
                                    placeholder='Nota para el envio'></input>

                                <p>
                                    <input type="checkbox" id='saveInfo'></input>
                                    <label htmlFor="saveInfo"> Guardar esta informacion para una futura compra</label>
                                </p>
                            </div>
                        </div>
                        <div>
                            {errorMsg &&
                                <span className='errorMsg'>Debe llenar todos los campos para continuar</span>
                            }
                        </div>
                        <div className='cart-footer'>
                            <Link to="/">Volver al carrito</Link>
                            {!next ?
                                <Link onClick={handleSubmit} to="/cart" className='btn-send'>Ir al envio</Link>
                                :
                                <Link onClick={handleSubmit} to="/details" className='btn-send'>Ir al envio</Link>
                            }

                        </div>
                    </form>
                </div>

                <CartDetails />
            </div>
        </>
    )
}
