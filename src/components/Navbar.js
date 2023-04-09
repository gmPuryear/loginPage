import { Link } from "react-router-dom";

const Navbar = () => {

    return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Login</Link>
                    </li>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;