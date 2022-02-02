import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' />
            </Routes>
        </Router>
    )
}

export default AppRouter