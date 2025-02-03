import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_footer.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <div className="container footer__container" id="footer">
            <div className="footer__box">
                <Link to="/" className="logo">
                    <img
                        src={Logo}
                        loading="lazy"
                        className="logo__img"
                        alt="Company Logo"
                        width="100"
                        height="41"
                    />
                </Link>
                <div className="footer__details">
                    <p>
                        <i className="fa-solid fa-cookie-bite"></i> Open
                        10am-10pm daily
                    </p>
                    <p>
                        <a href="https://maps.app.goo.gl/teHdvr4RX6Wwv3mP6">
                            <i className="fa-solid fa-map-pin"></i> Building 10
                            Wasl Port Views, Dubai
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer__socials">
                <a href="https://www.instagram.com/billionairecookiesdubai/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.tiktok.com/@billionairecookiesdubai">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://wa.me/971567715360">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://maps.app.goo.gl/teHdvr4RX6Wwv3mP6">
                    <FontAwesomeIcon icon={faLocationDot} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
