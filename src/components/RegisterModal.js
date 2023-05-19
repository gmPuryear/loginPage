import {useContext, useEffect, useState, useRef} from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import RegisterSuccessModal from './RegisterSuccessModal';
import RegisterModalContext from './RegisterModalContext';
import RegisterFormSchema from "./RegisterFormSchema";


const RegisterModal = ({open, setIsOpen}) => {
    const [userDoesNotExist, setUserDoesNotExist] = useState(false);
    const [userAlreadyExists, setUserAlreadyExists] = useState(false);

    const registerModalContext = useContext(RegisterModalContext);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: {
            errors,
            isSubmitSuccessful
        }
    }
        = useForm({
            resolver: yupResolver(RegisterFormSchema)
        });
        
        // const schema = yup.object({
        //     firstName: yup.string().required(),
        //     lastname: yup.string().required(),
        //     email: yup.email().required(),
        //     password: yup.string().minLength(8).required(),
        //     confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required // this compares confirm password input to password input
        // })
    

    // useEffect(() => {
    //     if (formState.isSubmitSuccessful) {
    //         reset()
    //     }
    // })
    
    return (
        <>
        {
            userDoesNotExist?
        (
            <>
                <RegisterSuccessModal/>
            </>)
                :
                (
        <div className="modal_container">
            <p className="close_modal_btn btn" onClick={() => {
                registerModalContext.toggleShowRegisterModal(false);
            }}
            >
                &times;
            </p>
            <div className="form_container">
                <h3 className="register_title input_title">
                    Register
                </h3>
                
                <form className="register_form"
                      onSubmit={handleSubmit(async (currentUserRegistrationInfo) => {
                          const newUserInfo = currentUserRegistrationInfo;

                          const {
                              firstName, 
                              lastName,
                              email,
                              password,
                              confirmPassword
                          } = newUserInfo;

                          try {
                              const config = {
                                  headers: {
                                      'Content-Type': 'application/json'
                                  }
                              }

                              const body = JSON.stringify(newUserInfo); // this is the body that will be sent to backend

                            //   const res = await axios.post('http://localhost:6060/api/users', body, config);
                              const res = await axios.post('https://login-page-server-gp.herokuapp.com/api/users', body, config);
                        
                              if (res.status === 200) {
                                  setUserDoesNotExist(true);
                                  setUserAlreadyExists(false);
                              }

                          } catch (err) {
                              if (err.response.data.errors[0]) {
                                  setUserAlreadyExists(true);
                              }
                          }
                      })}
                >
                    <p className="label_star input_title">
                        <span className="required_star">*</span>
                        <label htmlFor={"firstName"}>First Name</label>
                    </p>
                    <input
                        className="firstName_input text_input"
                        {...register('firstName')} 
                    />
                    <p>{errors.firstName?.message}</p>

                    <p className={"label_star input_title"}>
                        <span className="required_star">*</span>
                        <label htmlFor="lastName">Last Name</label>
                    </p>
                    <input
                        className="lastName_input text_input"
                        {...register('lastName')} 
                    />
                    <p>{errors.lastName?.message}</p>

                    <p className="email_labelStar label_star input_title">
                        <span className="required_star">*</span>
                        <label htmlFor="email">Email</label>
                    </p>
                    <input
                        className="email_input text_input"
                        {...register('email')} 
                    />
                    <p>{errors.email?.message}</p>

                {/* -------------------- Password Input ---------------------- */}
                    <p className="password_labelStar label_star input_title">
                        <span className="required_star">*</span>
                        <label htmlFor="password">Password</label>
                    </p>
                    <input
                    type='password'
                    className="password_input text_input"
                    {...register('firstName')} 
                    />
                    <p className="password_length_note">&#x2022;Min 8 characters</p>
                    <p>{errors.password?.message}</p>

                {/* -------------------- Confirm Password Input ---------------------- */}
                     <p className="password_labelStar label_star input_title">
                        <span className="required_star">*</span>
                        <label htmlFor="password">Confirm Password</label>
                    </p>
                    <input
                    type='password'
                    className="password_input text_input"
                    {...register('confirmPassword')}
                    />
                    {/* <p className="password_length_note">&#x2022;Min 8 characters</p> */}
                    <p>{errors.confirmPassword && "Passwords should match"}</p>

                    
                    {
                        userAlreadyExists
                        &&
                        <p className="user_already_exists_message">Account already exists!</p>
                    }
                    <button className="submit_registration_info btn">Register</button>
                </form>
            </div>
        </div>
)}</>
    )
}

export default RegisterModal;