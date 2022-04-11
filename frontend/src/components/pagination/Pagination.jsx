import React, { useState } from 'react';
import './pagination.css'
import { pageAction } from '../../redux/dataReducer'
import { useDispatch, useSelector } from 'react-redux'
import { animateScroll as scroll, Link } from 'react-scroll'

export const Pagination = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState(1);

    const products = useSelector(state => state.data.products)



    const pagina = useSelector(state => state.data.page)

    const porPagina = useSelector(state => state.data.productsByPage)


    const maximo = (products.length / porPagina);


    //const maximo = maht.round(((products.length / porPagina) + 0.5)) It will get the next value, so then you will use it for validate above a new page, and you wont lost any card
    // console.log(maximo)

    const nextPage = () => {
        setInput(parseInt(input) + 1);

        dispatch(pageAction(parseInt(pagina) + 1))
        // scroll.scrollToTop(300);  
        scroll.scrollTo(1000)
    };

    const previousPage = () => {
        setInput(parseInt(input) - 1);
        dispatch(pageAction(parseInt(pagina) - 1))
        scroll.scrollTo(1000)
        };

    const onKeyDown = e => {
        const value = parseInt(e.target.value)

        if (e.keyCode === 13) {
            console.log(maximo)
            dispatch(pageAction(value))
            if (value < 1 || value > Math.ceil(maximo) || isNaN(value)
            ) {
                dispatch(pageAction(1))
                setInput(1);
            } else {
                dispatch(pageAction(value))
            }
        }
    };

    const onChange = e => {
        setInput(e.target.value);
    };

    const forward = '>'
    const backward = '<'

    return (
        <div className='paginationFather'>
            <div className='paginationContainer'>
                
                    <button
                        className='paginationButton'
                        disabled={pagina === 1 || pagina < 1}
                        onClick={previousPage}

                    >
                        {backward}



                    </button>
           
                <input
                    className='paginationInput'
                    onChange={e => onChange(e)}
                    onKeyDown={e => onKeyDown(e)}
                    name="page"
                    autoComplete="off"
                    value={input}
                />
               
                    <button
                        className='paginationButton'
                        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
                        onClick={nextPage}
                        smooth={true} duration={500} delay={1000}
                    >
                        {forward}


                    </button>
                 
            </div>
        </div>
    );
};
