import {useContext, useEffect} from 'react';
import RegisterModalContext from './RegisterModalContext';


const RegisterSuccessModal = (setIsOpen) => {
    const registerModalContext = useContext(RegisterModalContext);

    return (
        <div className="register_success_container">
            {/*<div className="register_success_overlay"></div>*/}
            {/*<div className="register_success_container">*/}
                <h1>You're signed up!</h1>
                <button className='goTo_Login_btn' onClick={() => {
                    registerModalContext.toggleShowRegisterModal(false);
                }}
                >
                    Login Here!
                </button>
            {/*</div>*/}
        </div>
    )
}

export default RegisterSuccessModal;