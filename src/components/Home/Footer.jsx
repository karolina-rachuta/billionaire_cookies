import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
function Footer() {
  return (
    <div className="container footer__container" id="footer">
      <div className="footer__box">
        <Link to="/" className="logo">
          <img src={Logo} className="logo__img" alt="Company Logo" />
        </Link>
        <div className="footer__details">
          <p>
            <i className="fa-solid fa-cookie-bite"></i> Open 10am-10pm daily
          </p>
          <p>
            <a href="https://maps.app.goo.gl/teHdvr4RX6Wwv3mP6">
              <i className="fa-solid fa-map-pin"></i> Building 10 Wasl Port Views,
              Dubai
            </a>
          </p>
        </div>
      </div>
      <div className="footer__socials">
        <a href="https://www.instagram.com/billionairecookiesdubai/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@billionairecookiesdubai">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="https://wa.me/971567715360">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://maps.app.goo.gl/teHdvr4RX6Wwv3mP6">
        <i className="fa-solid fa-location-dot"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
