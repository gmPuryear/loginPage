import './App.css';
import React, { useState } from 'react';
import RegisterModalContext from './components/RegisterModalContext';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import { RequireAuth } from 'react-auth-kit';
import Navbar from './components/Navbar';


function App() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);


    const toggleShowRegisterModal = (val) => {
        setShowRegisterModal(val);
    }

    return (
        <RegisterModalContext.Provider value={
            {
                showRegisterModal,
                toggleShowRegisterModal
            }
        }>
            <>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/Home' element={<RequireAuth loginPath='/'>
                    {/* protected component that displays when user is logged in*/}
                    <Navbar/> 
                    {/* protected route... */}
                        <HomePage/> 
                        </RequireAuth>}>
                        </Route>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </>
        </RegisterModalContext.Provider>
    );

}

export default App;
