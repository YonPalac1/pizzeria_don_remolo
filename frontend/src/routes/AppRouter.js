import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useSelector } from "react-redux";

import {Login} from '../components/Login.jsx'
import { Navbar } from '../components/Navbar.jsx';
import { Home } from '../components/Home.jsx';
import { Register } from '../components/Register.jsx';

const AppRouter = () => {
    const logged = useSelector(store => store.data.login)

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/login' element={
                    logged ? 
                    <Home />
                    :
                    <Login />
                } />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}

export default AppRouter