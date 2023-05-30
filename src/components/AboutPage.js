import { Link } from "react-router-dom";
import { useIsAuthenticated } from 'react-auth-kit';
import Navbar from "./Navbar";


const AboutPage = () => {
    const userIsLoggedIn = useIsAuthenticated();



    return (
        <div className="about_page_container">
        {userIsLoggedIn && <Navbar/>}
        <div className="about_text_container">
            <section>
                
                <h1 className="about_project_header">About Project</h1>
                
                <br/>
                
                <p className="about_paragraph_line">
                    This is my first full stack web app using the MERN stack (MongoDB, Express JS, React, Node JS). With this
                    project, I wanted to practice building a registration and login page with authentication. 
                </p>

                <br/>

                    <h4 className="about_headers">Frontend</h4>
            
                <p className="about_paragraph_line">
                    I used <a href="https://authkit.arkadip.dev/" target="_blank"> <u>React Auth Kit</u> </a>
                    for authentication on the front-end as well as for authentication state management. Using React Auth kit 
                    helped immensely as it prevented me from having to constantly make calls to the backend to check if a user is 
                    logged in or not as well as provided easy means to implement user login.
                </p>

                <p className="about_paragraph_line"> 
                    In order to build forms efficiently an effectively, I used both
                    <a href="https://react-hook-form.com/" target="_blank"> <u>React Hook Form</u> </a>
                    and <a href="https://www.npmjs.com/package/yup" target="_blank"><u>Yup shema builder.</u></a>
                    By using both of these I was able to implement validation while eliminating unnecessary re-renders.
                </p>

                <br/>

                <h4>Backend</h4>
            
                <p className="about_paragraph_line">
                    I set up my backend using Express and Node JS to create my REST API. For validation on the backend I used
                    <a href="https://express-validator.github.io/docs/" target="_blank"><u> Express validator</u></a>.
                    This added more security to the overall application as validation was already implemented on the frontend
                    as well.
                        For further security, I used JWT on the backend with an expiration so that a user can only be logged
                        in with a valid JWT. I also used Bcrypt for password hashing and salting to keep passwords secure that
                        are stored on the database. This feature adds makes it much more difficult for password cracking as it
                        does not just hash the password, but also adds random data to the input making each hash unique.
                        Since this method of hashing is "slower" compared to other hashing functions, it greatly helps in slowing
                        down potential attacks such as a brute force attack.

                </p>

            </section>
        </div>
        </div>
    )
}

export default AboutPage;