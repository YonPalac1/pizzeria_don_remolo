import React from 'react';
import './footer.css';
import { meetUs, help, ordersAndDelivery, icons } from '../../utils/Footer.utils';
import { Icon } from './Icon/Icon';
import { ItemMap } from './ItemMap/ItemMap';
import { Subscribe } from './subscribe/Subscribe';



export const Footer = () => {
    return (


        <footer>
            <div className='footer'>
                <div className='footer-column'>
                    <span>Conocenos</span>
                    <ItemMap array={meetUs} />
                </div>
                <div className='footer-column'>
                    <span>Ayuda</span>
                    <ItemMap array={help} />
                </div>
                <div className='footer-column'>
                    <span>Pedidos y delivery</span>
                    <ItemMap array={ordersAndDelivery} />
                </div>
            </div>
            <div className='footer'>
                <span>Social</span>
                <div className='footer-social'>
                    {

                        icons.map(item => {
                            return <Icon key={item.id} item={item} />
                        })
                    }
                </div>
            </div>


            <div className='footer'>
                <Subscribe/>
            </div>


        </footer>

    )
};
