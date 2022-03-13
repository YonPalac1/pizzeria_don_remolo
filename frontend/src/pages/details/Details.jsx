import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../../components/navigation/Navigation'
import { CartDetails } from '../../components/cartDetails/CartDetails'
import { useDispatch, useSelector } from 'react-redux'
import { shippingAction } from '../../redux/cartReducer'
import './details.css'

export const Details = () => {
    const dispatch = useDispatch();
    const contact = useSelector(state => state.cart.info)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [option, setOption] = useState("")
    const [errorMsg, setErrorMsg] = useState(false);
    const [next, setNext] = useState(false);
 
    useEffect(()=>{
        if(option){
            setNext(true)
        }
    },[contact, option])
    
    const handleCheck = (e) => {
        setCheck2(false)
        setCheck1(true)
        setOption(e.target.name)
    }
    const handleCheck2 = (e) => {
        setCheck2(true)
        setCheck1(false)
        setOption(e.target.name)
    }

    const handleSubmit = () => {
        if(next){
            dispatch(shippingAction(option))
        } else {
            setErrorMsg(true)
        }
    }

  return (
    <>
        <Navigation />
        <div className='authentication'>
            <div className='authentication-column'>
                <form>
                    <div className='details'>
                        <div className='details_info'>
                            <div>
                                <h5>Nombre <span>{ contact.name }</span></h5>
                                <a>Edit</a>
                            </div>
                            <div>
                                <h5>Telefono <span>{ contact.celphone }</span></h5>
                                <a>Edit</a>
                            </div>
                            
                            <div>
                                <h5>Dirección<span>{ contact.address }</span></h5>
                                <a>Edit</a>
                            </div>
                            
                        </div>

                        <div className='details_details'>
                        <h5>Metodo de envio</h5>
                            <div>
                                <p>
                                    <input 
                                    id='local'
                                    type="checkbox" 
                                    name='local'
                                    onChange={handleCheck}
                                    checked={check1}
                                    />
                                    <label htmlFor='local'>Retirar en el local</label>
                                </p>
                                <span>Gratis</span>
                            </div>
                            <div>
                                <p>
                                    <input 
                                    id='del'
                                    type="checkbox"
                                    name='delivery'
                                    onChange={handleCheck2}
                                    checked={check2}
                                    />
                                    <label htmlFor='del'>Delivery</label>
                                </p>
                                <span>$ 130</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        { errorMsg && 
                            <span className='errorMsg'>Debe llenar todos los campos para continuar</span>
                        }
                    </div>

                    <div className='details-footer'>
                        <Link  to="/cart">Volver al carrito</Link>
                        { !next ? 
                            <Link onClick={handleSubmit} to="/details" className='btn-send'>Ir a pagar</Link>
                        :
                            <Link onClick={handleSubmit} to="/payment" className='btn-send'>Ir a pagar</Link>
                        }
                    </div>
                </form>
            </div>
            
            <CartDetails />
        </div>
    </>
  )
}
