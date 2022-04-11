import React from 'react'
import { useSelector } from 'react-redux'
import './header.css'
import { HeaderCarousel } from './HeaderCarousel'
import pizza from '../../assets/images/pizza-circle.png'
import empanadas from '../../assets/images/empanadas-circle.png'
import postre from '../../assets/images/postre-circle.png'

export const Header = () => {
  const index = useSelector(state => state.data.index)

  const carouselData = [{
    id: 1,
    subtitle: "La mejor pizza a domicilio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit id enim non morbi aliquet id quis. Vivamus pretium dolor vitae netus ut laoreet nisl quisque.",
    image: pizza,
    color: "circle1"
  }, {
    id: 2,
    subtitle: "Las empanadas más ricas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit id enim non morbi aliquet id quis. Vivamus pretium dolor vitae netus ut laoreet nisl quisque.",
    image: empanadas,
    color: "circle2"
  }, {
    id: 3,
    subtitle: "Delicias para tu paladar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit id enim non morbi aliquet id quis. Vivamus pretium dolor vitae netus ut laoreet nisl quisque.",
    image: postre,
    color: "circle3"
  }]
  
  return (
    <HeaderCarousel carouselData={carouselData[index]} />
  ) 
}
