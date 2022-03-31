import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { indexAction } from '../../redux/dataReducer'
import pizza from '../../assets/images/pizza-circle.png'
import empanadas from '../../assets/images/empanadas-circle.png'
import postre from '../../assets/images/postre-circle.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export const HeaderCarousel = ({ carouselData }) => {
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0)

  const [sateliteUno, setSateliteUno] = useState("uno")
  const [sateliteDos, setSateliteDos] = useState("dos")
  const [sateliteTres, setSateliteTres] = useState("tres")
  const [info, setInfo] = useState("active1")

  const indexChange = (index) => {
    if(index === 0) {
      setSateliteUno("uno")
      setSateliteDos("dos")
      setSateliteTres("tres")
      setInfo("active1")
    } else if (index === 1) {
      setSateliteUno("tres")
      setSateliteDos("uno")
      setSateliteTres("dos")
      setInfo("active2")
    } else if (index === 2) {
      setSateliteUno("dos")
      setSateliteDos("tres")
      setSateliteTres("uno")
      setInfo("active3")
    }
    
  }
  const increase = (index) => {
    if(index < 2){
      index = index + 1
      setIndex(index)
    } else {
      index = 0
      setIndex(index)
    }
    indexChange(index)
  };
  const decrease = (index) => {
    if(index === 1 || index === 2){
      index = index - 1;
      setIndex(index)
    } else {
      index = 2;
    } 
    indexChange(index)
  };

  const handleNextCarousel = () => {
    increase(index);
  }
  const handleBackCarousel = () => {
    decrease(index);
  }
 
  return (
    <header className="header">
        <section className='header-column_titles'>
            <div className={`titles fadeIn ${info}`}>
                <h1>Sabores caseros</h1>
                <h3>{ carouselData.subtitle }</h3>
                <p>{ carouselData.description }</p>
            </div>
        </section>

        <section className='header-column_carousel'>

          <div className='header-column_carousel_box'>
              <div className={`circle-bg ${ carouselData.color }`}></div>
              
              <div className='carousel'>
                <div className='carousel-central-img'>
                  <img src={ carouselData.image }></img>
                </div>

                  <img className={`satelite ${sateliteUno}`} src={pizza}></img>
                  <img className={`satelite ${sateliteDos}`} src={empanadas}></img>
                  <img className={`satelite ${sateliteTres}`} src={postre}></img>

              </div>


          </div>

          <div className='buttons'>
            <button 
                onClick={handleNextCarousel}
                className='next'>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                
            <button 
                onClick={handleBackCarousel}
                className='back'>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
          </div>
        </section>
    </header>
  )
}
