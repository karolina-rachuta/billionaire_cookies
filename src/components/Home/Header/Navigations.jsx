import {Link as ScrollLink} from "react-scroll";


const Navigation = ({menuOpen}) => {


    return (
        <ul className={menuOpen ? "open" : ""}>
            <li><ScrollLink to="about" className="menu__link">About</ScrollLink></li>
            <li><ScrollLink to="flavours" className="menu__link">Flavours</ScrollLink></li>
            <li><ScrollLink to="order" className="menu__link">Order</ScrollLink></li>
            {/* <li><ScrollLink to="events" className="menu__link">Events & Catering</ScrollLink></li>
            <li><ScrollLink to="faq" className="menu__link">FAQ</ScrollLink></li> */}
            <li><ScrollLink to="footer" className="menu__link">Contact Us</ScrollLink></li>
            <li className="menu__icons">
                <a href="https://www.instagram.com/billionairecookiesdubai/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@billionairecookiesdubai" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://wa.me/971567715360"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://maps.app.goo.gl/teHdvr4RX6Wwv3mP6"><i className="fa-solid fa-location-dot"></i></a>
            </li>
        </ul>
    )
}

export default Navigation;