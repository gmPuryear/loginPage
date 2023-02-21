import './App.css';
import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import {v4 as uuid} from 'uuid';
import {useForm} from 'react-hook-form';


const axios = require('axios');


function App() {

    return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Login</Link>
                        </li>
                        <li>
                            <Link to='/Home'>Home</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/Home' element={<HomePage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </>
    );

}

export default App;
