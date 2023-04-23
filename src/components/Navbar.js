import { useState } from "react";
import { Link } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import AboutPage from "./AboutPage";

const Navbar = () => {
    const [showLogoutModal, setShowLogoutModal] = useState();

    return (
            <nav>
                <ul>
                    <li>
                        <Link className="nav_link" to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to='/AboutPage'>About</Link>
                    </li>
                    <li>
                        <p className="open_logout_modal_btn" onClick={() => setShowLogoutModal(true)}>
                            Logout
                        </p>
                        {showLogoutModal && <LogOutModal setShowLogoutModal= {setShowLogoutModal}/>}
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;