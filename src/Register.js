import {useForm} from "react-hook-form";
import {useState, useEffect, useCallback} from "react";
import {v4 as uuid} from 'uuid';

const Register = ({open, setIsOpen, userList, setUserList}) => {
    const [userAlreadyExists, setUserAlreadyExists] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: {
            errors,
            isSubmitSuccessful}
    }
    = useForm();

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    })


    const loginAlreadyExists = (currentUserRegistrationInfo) => {
        const currentUserRegistrationEmail = currentUserRegistrationInfo.email;
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email === currentUserRegistrationEmail) {
                return true;
            }
        }
    }

    // saves login details of the user registering if it does not already exist via email
    const saveLoginCredentials = (currentUserRegistrationInfo) => {
        if (!loginAlreadyExists(currentUserRegistrationInfo)) {
            currentUserRegistrationInfo.id = uuid();
            const listWithNewUser = [...userList, currentUserRegistrationInfo];
            setUserList(listWithNewUser);
            localStorage.setItem("userList", JSON.stringify(listWithNewUser))
        } else {
            setUserAlreadyExists(true);
        }
    }

    const returningSomethingIfLoginDoesNotExist = () => <p>REGISTERED!</p>


    return (
        <div className="register_overlay">
            <div className="modal_container">
                <div className="modal_content">
                    <div className="close-btn btn" onClick={() => {
                        setIsOpen(false);
                    }}
                    >
                        &times;
                    </div>
                    <p className="register_title input_title">
                        Register
                    </p>

                    <form className="register_form"
                          onSubmit={handleSubmit((currentUserRegistrationInfo) => {
                              saveLoginCredentials(currentUserRegistrationInfo);
                          })}
                    >

                        <p className="firstName_labelStar label_star input_title">
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

                        <p className={"lastName_labelStar label_star input_title"}>
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

                        <p className="userName_labelStar label_star input_title">
                            <span className="required_star">*</span>
                            <label htmlFor="userName">User Name</label>
                        </p>
                        <input
                            className="userName_input text_input"
                            {...register(
                                "userName",
                                {
                                    required: true,
                                    maxLength: 25
                                })}
                        />

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
                        <error

                        <button className="submit_user_info btn">Register</button>
                        {/*<input className="submit_user_info btn" type="submit"/>*/}
                    </form>
                    {/*{userAlreadyExists && <p>User already exists</p>}*/}
                    {/*{userAlreadyExists ? <p>User already exists</p> : returningSomethingIfLoginDoesNotExist()}*/}
                </div>
            </div>
        </div>
    )
}

export default Register;