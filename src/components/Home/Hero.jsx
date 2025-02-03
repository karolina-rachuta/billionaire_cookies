import React from 'react';
import BgImage from '../../assets/bcookies7.webp';
import BgImageMobile from '../../assets/bcookies7-mobile.webp';
import BgImageTablet from '../../assets/bcookies7-tablet.webp';

const Hero = () => {
    function preload_image(im_url) {
        let img = new Image();
        img.src = im_url;
    }
    preload_image(BgImage);
    preload_image(BgImageMobile);
    preload_image(BgImageTablet);
    return (
        <div className="container container__hero" id="hero">
            <div>
                <p>Dubai&apos;s first rotating cookie menu is here</p>
            </div>
            {/* fetchpriority="high" */}
        </div>
    );
};
export default Hero;
