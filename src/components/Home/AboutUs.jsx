import React from 'react';
import About_info from '../../assets/about_info.webp';
import About_info_Mobile from '../../assets/about_info-mobile.webp';
const AboutUs = () => {
    return (
        <div className="container container__about" id="about">
            <picture>
                <source media="(max-width:650px)" srcset={About_info_Mobile} />
                {/* <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;"> */}
                <img
                    loading="lazy"
                    src={About_info}
                    width=""
                    height=""
                    alt=""
                />
            </picture>
            <div className="about__box">
                <h1>About</h1>
                <p>
                    We&apos;re Billionare Cookies, Dubai&apos;s first rotating
                    cookie concept with brand new flavours dropping every single
                    week available for a limited time only. All recipies are
                    developed by hand in our custom cookie kitchen in Dubai.
                </p>
                <p>
                    Our mission is to create a fun, memorable experience from
                    product to packaging to interactions with customers. How did
                    it all begin? Two best friends fueled by a love of cookies
                    and making memories over food.
                </p>
            </div>
        </div>
    );
};
export default AboutUs;
