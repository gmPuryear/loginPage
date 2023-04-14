import { Link } from "react-router-dom";
import { useIsAuthenticated } from 'react-auth-kit';
import Navbar from "./Navbar";


const AboutPage = () => {
    const userIsLoggedIn = useIsAuthenticated();



    return (
        <>
        {userIsLoggedIn && <Navbar/>}
        <div className="about_text_container">
            <section>
                This is my first full stack web app using the MERN stack (MongoDB, Express JS, React, Node JS). With this
                project, I wanted to learn how to build a registration and login page as well as implement authentication using
                <a href="https://authkit.arkadip.dev/" target="_blank">React Auth Kit </a> 
                and how to implement security for user login and registration. I used "React Auth Kit"
                for authentication on the front end as well as for authentication state management. Using React Auth kit 
                helped immensely as it prevented me from having to constantly make calls to the backend to check if a user is 
                logged in or not. I also used the "React Hook Form" for form validation, and error handling. I chose to use React Hook Form  due 
                to the ease of use and the fact that it removes any unnecessary re-renders.
            </section>
        </div>
        
        </>
    )
}

export default AboutPage;