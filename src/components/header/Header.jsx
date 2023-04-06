import { FaMoon } from "react-icons/fa";
import './header.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="container flex">
                <h1>Where in the world?</h1>

                <div className="header__mode">
                    <FaMoon />
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Header;