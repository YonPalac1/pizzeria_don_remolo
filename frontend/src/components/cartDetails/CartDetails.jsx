import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, totalAction, cartAction } from '../../redux/cartReducer'

import './cartDetails.css'

export const CartDetails = () => {
    const dispatch = useDispatch();
    const productCart = useSelector(state => state.cart.cart)
    const type = useSelector(state => state.cart.shipping)
    const totals = useSelector(state => state.cart.total)
    const [isActive, setActive] = useState(false);
    
    useEffect(()=>{
        if(productCart.length){
            const total = productCart.map(item => item.price )
            dispatch(totalAction(total))
        }
    }, [productCart, type])
    
    const deleteProduct = (id) => {
        dispatch(deleteAction(id))
    }

    const handleToggle = () => {
        setActive(!isActive);
      };

    return (
        <>
        <div className="cart-column_btn_mobile" onClick={handleToggle}>
            <span>En carrito</span>
            <FontAwesomeIcon className='icon' icon={faChevronDown} />
        </div>
        <div className={isActive ? 'cart-column details active' : 'cart-column details' }>
            { !productCart.length ? 
            <div className='cart-column_column img'>No hay productos en el carrito</div> 
            
            : productCart.map(product => {
            return <div className='cart-column_column img' key={product._id}>
                    <div>
                        <img></img>
                    </div>
                    <div>
                    { product.category !== "bebidas" ?
                        <h5>{ product.name }</h5> :
                        <h5>{ product.brand }</h5>
                    }
                        <span>$ { product.price }</span>
                    </div>
                    <div className='icon'>
                        <button onClick={()=>deleteProduct(product._id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
            </div>
            })
            }

                <div className='cart-column_column coupon'>
                    <input 
                    placeholder='Código cupón'></input>
                    <button className='add_coupon'>Añadir cupón</button>
                </div>
                <div className='cart-column_column subtotal'>
                    <div>
                        <h5>Subtotal</h5>
                        <span>$ { productCart.price }</span>
                    </div>
                    <div>
                        <h5>Envio</h5>
                        {
                        type === "" ? 
                        <span>Se calculará en el siguinte paso</span>
                        :
                             type !== "local" ?  
                            <p>$ 130</p>
                            : 
                            <span>gratis (se retira por local)</span>
                            
                        }
                        
                    </div>
                </div>
                <div className='cart-column_column total'>
                    <div>
                        <h5>Total</h5>
                        { !totals ?
                            <span>$ 0</span>
                            : 
                            <span>$ { totals }</span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
