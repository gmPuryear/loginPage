import { useState } from "react";
import { Link } from "react-router-dom";
import LogOutModal from "./LogOutModal";

const Navbar = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Login</Link>
                    </li>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <p className="open_logout_modal_btn" onClick={() => setShowLogoutModal(true)}>
                            Logout
                        </p>
                        {showLogoutModal && <LogOutModal setShowLogoutModal={setShowLogoutModal}/>}
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;