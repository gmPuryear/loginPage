import {useContext, useEffect, useState} from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import RegisterSuccessModal from './RegisterSuccessModal';
import RegisterModalContext from './RegisterModalContext';

// After user successfully logs in, take them to another modal page that asks them to login with the success message

const RegisterModal = ({open, setIsOpen}) => {
    const [userDoesNotExist, setUserDoesNotExist] = useState(false);
    const [userAlreadyExists, setUserAlreadyExists] = useState(false);

    const registerModalContext = useContext(RegisterModalContext);

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: {
            errors,
            isSubmitSuccessful
        }
    }
        = useForm();

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    })

    return (
        <>
        {
            userDoesNotExist?
        (
            <>
                {/*<div className="register_success_overlay"></div>*/}
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
                          console.log(newUserInfo);

                          const {
                              firstName, 
                              lastName,
                              email,
                              password
                          } = newUserInfo;

                          try {
                              const config = {
                                  headers: {
                                      'Content-Type': 'application/json'
                                  }
                              }

                              const body = JSON.stringify(newUserInfo); // this is the body that will be sent to backend

                              const res = await axios.post('http://localhost:6060/api/users', body, config);

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
                        {...register(
                            "firstName",
                            {
                                required: true
                            })}
                    />
                    {errors.firstName && <p className="required_message">This field is required</p>}

                    <p className={"label_star input_title"}>
                        <span className="required_star">*</span>
                        <label htmlFor="lastName">Last Name</label>
                    </p>
                    <input
                        className="lastName_input text_input"
                        {...register(
                            "lastName",
                            {
                                required: true
                            })}
                    />
                    {errors.firstName && <p className="required_message">This field is required</p>}


                    <p className="password_labelStar label_star input_title">
                        <span className="required_star">*</span>
                        <label htmlFor="password">Password</label>
                    </p>
                    <input
                        className="password_input text_input"
                        {...register(
                            "password",
                            {
                                required: true,
                                minLength: 8,
                                maxLength: 24
                            })}
                    />
                    <p className="password_length_note">&#x2022;Min 8 characters</p>
                    {errors.firstName && <p className="required_message">This field is required</p>}

                    <p className="email_labelStar label_star input_title">
                        <span className="required_star">*</span>
                        <label htmlFor="email">Email</label>
                    </p>
                    <input
                        className="email_input text_input"
                        {...register(
                            "email",
                            {
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                            })}
                    />
                    {errors.firstName && <p className="required_message">This field is required</p>}
                    {
                        userAlreadyExists
                        &&
                        <p className="user_already_exists_message">Account already exists!</p>
                    }
                    <button className="submit_registration_info btn">Register</button>
                </form>
                {/* {*/}
                {/*    userDoesNotExist*/}
                {/*    &&*/}
                {/*    <>*/}
                {/*    <p className="account_created_message">You're signed up!</p>*/}
                {/*    <button onClick={() => setIsOpen(false)}>Login Here!</button>*/}
                {/*    </>*/}
                {/*}*/}

                {/*{*/}
                {/*    userDoesNotExist*/}
                {/*    &&*/}
                {/*    (*/}
                {/*    <div>*/}
                {/*        <div className="register_success_overlay"></div>*/}
                {/*        <RegisterSuccessModal/>*/}
                {/*    </div>)*/}
                {/*} */}
            </div>
        </div>
)}</>
    )
}

export default RegisterModal;