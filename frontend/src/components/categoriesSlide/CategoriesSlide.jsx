import React from 'react'
import Carousel from "react-multi-carousel";
import { CardsCategories } from '../cardsCategories/CardsCategories'
import "react-multi-carousel/lib/styles.css";
import './categoriesSlide.css'

export const CategoriesSlide = () => {
  const card_bg = {
    active: "active",
    unactive: "unactive"
  }

  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 4,
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
      <CardsCategories name="Pizzas" bg={card_bg.active} />
      <CardsCategories name="Empanadas" bg={card_bg.unactive} />
      <CardsCategories name="Postres" bg={card_bg.unactive} />
      <CardsCategories name="Bebidas" bg={card_bg.unactive} />
    </Carousel>
  </>
}
