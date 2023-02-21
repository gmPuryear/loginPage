import {useEffect, useState} from "react";
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux'; // this connects this component to redux
// import {register} from '../actions/auth';
import axios from 'axios';
import {setAlert} from '../actions/alert';

const RegisterModal = ({setAlert, open, setIsOpen}) => {
    const [userDoesNotExist, setUserDoesNotExist] = useState(false);
    const [userAlreadyExists, setUserAlreadyExists] = useState(false);
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
        <div className="modal_container">
            <div className="close_modal_btn btn" onClick={() => {
                setIsOpen(false);
            }}
            >
                &times;
            </div>
            <div className="form_container">
                <h3 className="register_title input_title">
                    Register
                </h3>

                <form className="register_form"
                      onSubmit={handleSubmit(async (currentUserRegistrationInfo) => {
                          const newUser = currentUserRegistrationInfo;
                          try {
                              const config = {
                                  headers: {
                                      'Content-Type': 'application/json'
                                  }
                              }

                              const body = JSON.stringify(newUser); // this is the body that will be sent to backend

                              const res = await axios.post('http://localhost:6060/api/users', body, config);
                              if (res.data) {
                                  setAlert("YAY! ACCOUNT CREATED!"); // this is pass this in as a message to our
                                    // actions then generate id, then dispatch the message
                                  setUserAlreadyExists(false);
                                  setUserDoesNotExist(true);
                              }

                          } catch(err) {
                              setUserAlreadyExists(true);
                              console.log(err);
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
                        userDoesNotExist
                        &&
                        <p className="account_created_message">You're signed up!</p>
                    }

                    {
                        userAlreadyExists
                        &&
                        <p className="user_already_exists_message">Account already exists!</p>
                    }

                    <button className="submit_registration_info btn">Register</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {setAlert}) (RegisterModal); // connect takes in 2 things: any stay you want to map, and object with any actions