import React from 'react'
import Carousel from "react-multi-carousel";
import { CardsCategories } from '../cardsCategories/CardsCategories'
import "react-multi-carousel/lib/styles.css";
import './categoriesSlide.css'
import { useDispatch, useSelector } from 'react-redux';
import { allDataAction } from '../../redux/dataReducer';

export const CategoriesSlide = () => {
  const dispatch = useDispatch();
  const categoryActive = useSelector(state => state.data.category_active)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1030, min: 570 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 569, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  const categories = [{
    id: 1,
    name: "pizzas"
  },{
    id: 2,
    name: "empanadas"
  },{
    id: 3,
    name: "bebidas"
  },{
    id: 4,
    name: "postres"
  }]
  
  const handleAllProducts = () => {
    dispatch(allDataAction())
  }

  return <>
    <h3>Nuestros sabores</h3>
    <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={false}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
    >
      {
        categories.map(category => {
          return <CardsCategories category={category} categoryActive={categoryActive} key={category.id} />
        })
      }
    <div className='categories-cards' onClick={handleAllProducts}>
        <div className='categorie-card'>
            <span>Todos</span>
        </div>
    </div>
    </Carousel>
  </>
}
