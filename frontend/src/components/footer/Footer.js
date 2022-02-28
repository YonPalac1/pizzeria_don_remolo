import React from 'react';
import './footer.css';

export const Footer = () => {
  return <footer>
    <div className='footer'>
      <div className='footer-column'>
        <span>Conocenos</span>
        <a href="/">¿Quienes somos?</a>
        <a href="/">Cuidando los detalles</a>
        <a href="/">Opiniones de los clientes</a>
      </div>
      <div className='footer-column'>
        <span>Ayuda</span>
        <a href="/">Servicio al cliente</a>
        <a href="/">Preguntas frecuentes</a>
        <a href="/">Contactanos</a>
      </div>
      <div className='footer-column'>
        <span>Pedidos y delivery</span>
        <a href="/">¿Como funciona?</a>
        <a href="/">Terminos de compra</a>
      </div>
    </div>
    <div className='footer'>
      <span>Social</span>
      <div className='footer-social'>
        <i className='icon'></i>
        <i className='icon'></i>
        <i className='icon'></i>
        <i className='icon'></i>
        <i className='icon'></i>
      </div>
    </div>
  </footer>;
};
