import React from 'react'
import { Navigation } from '../../components/navigation/Navigation'
import { CartDetails } from '../../components/cartDetails/CartDetails'
import './payment.css'

export const Payment = () => {
  return (
    <>
        <Navigation />
        <div className='authentication'>
            <div className='authentication-column'>
                <form>
                    <div className='details'>
                        <div className='details_info'>
                            <div>
                                <h5>Contacto <span>Yona.@gmail.com</span></h5>
                                <a>Edit</a>
                            </div>
                            
                            <div>
                                <h5>Enviar a <span> Av Dto Alvarez</span></h5>
                                <a>Edit</a>
                            </div>
                            
                            <div>
                                <h5>Metodo de pago <span>Efectivo</span></h5>
                                <a>Edit</a>
                            </div>
                            
                        </div>

                        <div className='details_details'>
                        <h5>Metodo de pago</h5>
                            <div className='pay_method'>
                                $ Solo efectivo
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <CartDetails />
        </div>
    </>
  )
}
