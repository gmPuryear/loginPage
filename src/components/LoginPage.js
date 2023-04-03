import React, {useEffect, useState, useContext, useReducer} from 'react';
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import RegisterModal from './RegisterModal';
import {useForm} from 'react-hook-form';
import RegisterModalContext from './RegisterModalContext';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useSignIn } from 'react-auth-kit';

const LoginPage = () => {

    const registerModalContext = useContext(RegisterModalContext);

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    // const auth = useSelector((state) => state.auth)
    // console.log(auth);

    const signIn = useSignIn(); // takes care of all authentication

    return (

        <div className="login_card">
            <h3 className="login_title">Login</h3>

            <form className="login_form" onSubmit={handleSubmit(async (loginUserData) => {

                const {
                    email,
                    password
                } = loginUserData;

                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(loginUserData);


                try {
                    
                    const res = await axios.post('http://localhost:6060/api/auth', body, config);
                    console.log(res.data.token);   

                    if (res.status === 200) {
                        console.log(loginUserData);
                        signIn({
                            token: res.data.token,
                            expiresIn: .5,
                            tokenType: "Bearer",
                            authState: {email: loginUserData.email}
                })
                navigate('/home');
                    }
                    


                } catch (err) {
                        console.log(err);

                    }
                    // USE AUTH ROUTE FOR LOGIN. CHECK FOR TOkEN AND IF PRESENT, SAVE TO LOCALSTORAGE
            })}>
                <p className="login_email_label" htmlFor="email">Email</p>
                <input className="login_email_input" {...register("email", {required: true})}/>

                <p className="login_password_label" htmlFor="password">Password</p>
                <input className="login_password_input" {...register("password", {required: true})}/>

                <button className="login_submit_btn btn" type="submit">Login</button>
            </form>

            <p className="signup_here_txt" onClick={() => {
                registerModalContext.toggleShowRegisterModal(true);
            }}>Need an account? <span className="signup_btn btn">SIGN UP!</span></p>
            {
                registerModalContext.showRegisterModal
                &&
                <RegisterModal/>
            }
        </div>
    );
}

export default LoginPage;