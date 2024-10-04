import React from "react";
function Flavours({image}) {
    return (
    <div
        className="container flavours__container"
        id="flavours">
          <img loading="lazy" className="flavours__img" src={image} alt="" />
      </div>)
  }
  export default Flavours;
