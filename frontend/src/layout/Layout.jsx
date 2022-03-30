import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'


export const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}

 