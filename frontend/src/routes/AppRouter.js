import React,{useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import {Login} from '../components/Login.jsx'
import { Navbar } from '../components/Navbar.jsx';
import { Home } from '../components/Home.jsx';
import { Register } from '../components/Register.jsx';

const AppRouter = () => {
    const logged = useSelector(store => store.data.ok)
   
    useEffect(()=>{
    }, [])

    return (
        <Router>
            <Navbar />
            <Routes>
                
                <Route path='/login' element={
                    logged ? 
                        <Navigate to="/" />
                        :
                        <Login />
                    } />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRouter