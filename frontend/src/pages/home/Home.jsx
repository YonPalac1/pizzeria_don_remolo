import React from 'react';
import { Banner } from '../../components/banner/Banner';
import { CartIcon } from '../../components/cartIcon/CartIcon';
import { CategoriesSlide } from '../../components/categoriesSlide/CategoriesSlide';
import { Header } from '../../components/header/Header';
import { Menu } from '../../components/menu/Menu';
import { Pagination } from '../../components/pagination/Pagination';
import { ShowMore } from '../../components/showMore/ShowMore';
import './home.css'

export const Home = () => {

  return <div className='home'>
    <Header />
    <CategoriesSlide />
    <Menu />
    <Pagination />
    <Banner />
    <CartIcon />
  </div>
};
