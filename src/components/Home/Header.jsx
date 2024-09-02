import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";
import {useState} from "react";
import Logo from '../../assets/logo.webp';
import Navigation from "./Header/Navigations";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }

    return (
        <header>
            <nav>
                <div className="nav__firstRow">
                    <Link to="/" className="logo"><img src={Logo} className="logo__img" alt="Company Logo"/></Link>
                    <div className="menu__box">
                        <ScrollLink to="order" className="nav__order">ORDER NOW</ScrollLink>
                        <div className="menu" onClick={handleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="nav__hamburder"><Navigation menuOpen={menuOpen}/></div>
            </nav>
        </header>
    )
}
export default Header;