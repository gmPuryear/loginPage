import { useIsAuthenticated } from 'react-auth-kit';
import Navbar from "./Navbar";



const HomePage = () => {
    const userIsLoggedIn = useIsAuthenticated();

    return (
        <>
        {userIsLoggedIn && <Navbar/>}
            <div className="homePage_text">HOMEPAGE</div>
        </>
    )
}

export default HomePage;