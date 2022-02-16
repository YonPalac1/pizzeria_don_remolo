import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Login} from '../components/Login.jsx'
import { Navbar } from '../components/Navbar.jsx';
import { Home } from '../components/Home.jsx';
import { Register } from '../components/Register.jsx';
import { sessionAction } from '../redux/authReducer.js';

const AppRouter = () => {
    const logged = useSelector(store => store.auth.ok)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const loggedUser = window.localStorage.getItem("user")
        if(loggedUser){
            dispatch(sessionAction(loggedUser))
        }
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
                <Route path='/register' element={
                    logged ? 
                        <Navigate to="/" />
                        :
                        <Register />
                    } />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRouter