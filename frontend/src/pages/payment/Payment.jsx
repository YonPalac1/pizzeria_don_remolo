import React from 'react'
import { Link } from 'react-router-dom' 
import { Navigation } from '../../components/navigation/Navigation'
import { CartDetails } from '../../components/cartDetails/CartDetails'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutAction } from '../../redux/cartReducer'
import './payment.css'

export const Payment = () => {
    const dispatch = useDispatch();
    const contact = useSelector(state => state.cart.info)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkoutAction(contact))
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
                                <h5>Nombre <span> { contact.name }</span></h5>
                                <a>Edit</a>
                            </div>
                            <div>
                                <h5>Telefono <span> { contact.celphone }</span></h5>
                                <a>Edit</a>
                            </div>
                            
                            <div>
                                <h5>Dirección<span> { contact.address }</span></h5>
                                <a>Edit</a>
                            </div>
                            
                            <div>
                                <h5>Metodo de pago <span> Efectivo</span></h5>
                            </div>
                            
                        </div>

                        <div className='details_details'>
                            <div onClick={handleSubmit} className='pay_method'>
                                Realizar pago
                            </div>
                        </div>
                        <div className='details-footer'>
                            <Link to="/details">Volver a los detalles</Link>
                        </div>
                    </div>
                </form>
            </div>
            
            <CartDetails />
        </div>
    </>
  )
}
