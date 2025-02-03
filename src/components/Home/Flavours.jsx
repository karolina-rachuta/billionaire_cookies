import React from 'react';
function Flavours({ image }) {
    return (
        <div
            className="container flavours__container"
            id="flavours"
            width="700"
            height="589"
        >
            <img
                loading="lazy"
                className="flavours__img"
                src={image}
                alt="Flavours image"
                width="700"
                height="589"
            />
        </div>
    );
}
export default Flavours;
