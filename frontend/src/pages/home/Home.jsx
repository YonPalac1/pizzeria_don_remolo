import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Banner } from '../../components/banner/Banner';
import { CategoriesSlide } from '../../components/categoriesSlide/CategoriesSlide';
import { Header } from '../../components/header/Header';
import { Menu } from '../../components/menu/Menu';
import { ShowMore } from '../../components/showMore/ShowMore';
import './home.css'

export const Home = () => {
  const user = useSelector(state => state.auth.user)

  return <div className='home'>
    <Header />
    <CategoriesSlide />
    <Menu />
    <ShowMore />
    {/* <Banner /> */}
  </div>
};
