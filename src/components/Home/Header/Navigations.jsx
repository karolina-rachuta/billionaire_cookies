import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ menuOpen }) => {
    return (
        <ul className={menuOpen ? 'open' : ''}>
            <li>
                <ScrollLink to="about" className="menu__link">
                    About
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="flavours" className="menu__link">
                    Flavours
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="order" className="menu__link">
                    Order
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="footer" className="menu__link">
                    Contact Us
                </ScrollLink>
            </li>
            <li className="menu__icons">
                <a
                    href="https://www.instagram.com/billionairecookiesdubai/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://www.tiktok.com/@billionairecookiesdubai"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://wa.me/971567715360">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://maps.app.goo.gl/teHdvr4RX6Wwv3mP6">
                    <FontAwesomeIcon icon={faLocationDot} />
                </a>
            </li>
        </ul>
    );
};

export default Navigation;
