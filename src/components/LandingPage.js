import LoginPage from './LoginPage';
import RegisterModalContext from './RegisterModalContext';
import RegisterModal from './RegisterModal';
import {useContext} from "react";

const LandingPage = () => {
    const registerModalContext = useContext(RegisterModalContext);

    return (
        <>
            {!registerModalContext.showRegisterModal
                ?
                <LoginPage/>
                :
                <RegisterModal/>
            }
        </>
    )
}
export default LandingPage;