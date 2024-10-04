import React from "react";
import BgImage from "../../assets/bcookies7.webp";

const Hero = () => {

    function preload_image(im_url) {
        let img = new Image();
        img.src = im_url;
    
    }
        preload_image(BgImage);
    return (
        <div className="container container__hero" id="hero">
       <div><p>Dubai&apos;s first rotating cookie menu is here</p></div>
       {/* fetchpriority="high" */}
        </div>
    )
}
export default Hero;