import LoginPage from './Login';
import RegisterModalContext from './RegisterModalContext';
import RegisterModal from './RegisterModal';
import {useContext, useEffect, useState, useRef} from "react";

const LandingPage = () => {
    const [name, setName] = useState('');
    const inputRef = useRef();
    const prevName = useRef('');
    const registerModalContext = useContext(RegisterModalContext);

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    


    const focus = () => {
        console.log(inputRef.current.value);
    }


    return (
        <>
            {!registerModalContext.showRegisterModal
                ?
                <LoginPage/>
                :
                <RegisterModal/>
            }
            <input ref={inputRef} value={name} onChange= {e => setName(e.target.value)}/>
            <p>My names is {name} and it used to be {prevName.current}</p>
            <button onClick={focus}>Focus</button>
        </>
    )
}
export default LandingPage;