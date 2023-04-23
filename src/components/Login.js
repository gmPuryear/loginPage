import React, {useEffect, useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import RegisterModal from './RegisterModal';
import {useForm} from 'react-hook-form';
import RegisterModalContext from './RegisterModalContext';
import axios from 'axios';
import {useSignIn} from 'react-auth-kit';



const LoginPage = () => {
    const [userLoginSuccess, setUserLoginSuccess] = useState('');

    const registerModalContext = useContext(RegisterModalContext);

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState,
        formState: { 
            errors,
            isSubmitSuccessful
        }
    } = useForm();

    // useEffect(() => {
    //     if (formState.isSubmitSuccessful) {
    //         console.log("from Use effect");
    //         reset()
    //     }
    // })

    const navigate = useNavigate();

    const signIn = useSignIn(); // takes care of all authentication

    return (

        <div className="login_card">
            <h3 className="login_title">Login</h3>

            <form className="login_form" onSubmit={
                handleSubmit(async (loginUserData) => {

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

                    if (res.status === 200) {
                        signIn({
                            token: res.data.token,
                            expiresIn: 300,
                            tokenType: "Bearer",
                            authState: {email: loginUserData.email}
                        })
                        navigate('/home');
                    }

                } catch (res) {
                    setError('invalid_credentials', { 
                        message: 'email and/or password incorrect'
                      })
                      setTimeout(() => {
                        reset();
                    }, 2000);
                }
            })}>
                <p className="login_email_label" htmlFor="email">Email</p>
                <input className="login_email_input"
                       {...register("email",
                           {
                               required: true,
                           })
                }/>
                {errors.email && <p className='required_message'>This field is required</p>}

                <p className="login_password_label" htmlFor="password">Password</p>
                <input className="login_password_input" type='password' 
                        {...register("password",
                            {
                                required: true,
                                minLength: 8,
                                maxLength: 24
                            })
                }/>
                {errors.password && <p className='required_message'>This field is required</p>}

                <button className="login_submit_btn btn" type="submit">Login</button>
            </form>
            {errors.invalid_credentials && <p className='error_message invalid_login_message'>Email or password do not match our records</p>}
            <p className="signup_here_txt" onClick={() => {
                registerModalContext.toggleShowRegisterModal(true);
                }}>Need an account? 
                <span className="signup_btn btn">SIGN UP!</span>
            </p>
            {registerModalContext.showRegisterModal && <RegisterModal/>}
        </div>);
}

export default LoginPage;