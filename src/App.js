import './App.css';
import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import Register from './Register';
import {useForm} from 'react-hook-form';
const axios = require('axios')


function App() {
    const [openModal, setOpenModal] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const {register, handleSubmit} = useForm();




    
    const ifUserExists = (userData) => {
        const currentUserName = userData.userName;
        const currentPassword = userData.password;

    }
    

    return (
            <div className="login_card">
                <h3 className="login_title">Login</h3>
                
                <form className="login_form" onSubmit={handleSubmit((userData) => {
                    ifUserExists(userData);
                })}>
                        <p className="login_email_label" htmlFor="userName">Email</p>
                        <input className="login_email_input" {...register("userName", {required: true})}/>

                        <p className="login_password_label" htmlFor="password">Password</p>
                        <input className="login_password_input" {...register("password", {required: true})}/>

                    <button className="login_submit_btn btn" type="submit">Login</button>
                </form>
                
                <p className="signup_here_txt" onClick={() => {
                    setIsOpen(true);
                }}>Need an account? <span className="signup_btn btn">SIGN UP!</span></p>
                {isOpen &&
                    <Register open={isOpen} setIsOpen={setIsOpen}/>}
            </div>
    );
}

export default App;
