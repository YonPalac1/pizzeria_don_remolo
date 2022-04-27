import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../redux/dataReducer";
import './modal.css';

export const Modal = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.order.details) 

  useEffect(() => {
    console.log(details)
  }, [])

  const openModal = () => {
    dispatch(modalAction(false));
  };

  return (
    <div className="modalActive">
      <div className="modalProduct" onClick={openModal}></div>
      <div className='modal-container'>
          <div className='modal-container_details'>
            <div>
                Nombre: <span>{details?.name} {details?.lastname}</span>
            </div>
            <div>
                Celular: <span>{details?.celphone}</span>
            </div>
            <div>
                Direccion: <span>{details?.address}</span>
            </div>
            <div>
                Nota: <span>{details?.note}</span>
            </div>
            <div>
                Pedido: 
                <div className='pedido'>
                  {details.menu.map(orden => {
                    return <><span>{orden.name} :</span> <p>{orden.description}</p></>
                  })
                  }
                </div>
            </div>
            

          </div>
      </div>
    </div>
  )
}
