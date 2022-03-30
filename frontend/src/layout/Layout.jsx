import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { NavbarMobile } from '../components/navbar/NavbarMobile'

export const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <NavbarMobile />
            {children}
        <Footer/>
    </>
  )
}

 