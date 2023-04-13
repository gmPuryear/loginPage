import { Link } from "react-router-dom";
import { useIsAuthenticated } from 'react-auth-kit';
import Navbar from "./Navbar";


const AboutPage = () => {
    const userIsLoggedIn = useIsAuthenticated();



    return (
        <>
        {userIsLoggedIn && <Navbar/>}
        This is my first full stack web app using the MERN stack (MongoDB, Express JS, React, Node JS). With this
        project, I wanted to learn about and how to implement security for user login and registration. I used "React Auth Kit"
        <Link to={{ pathname: "https://authkit.arkadip.dev/" }} target="_blank"><b>React Auth Kit</b></Link>
        for authentication on the front end as well as for authentication state management. Using React Auth kit helped immensely
        as it prevented me from having to constantly make calls to the backend to check if a user is still logged in. 
        
        </>
    )
}

export default AboutPage;