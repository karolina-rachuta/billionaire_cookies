import React from "react";
import Order_Photo from "../../assets/order_img.webp";
const Order = () => {
  return (
    <div className="container order__container" id="order">
      <div className="order__big-box">
        <div className="order__left">
          <h1>Order</h1>
          <div className="order__box">
            <div className="links__box">
              <div className="link__box">
                <a href="https://order.chatfood.io/billionaire-cookies/menu">
                  Order Direct
                </a>
                <a href="https://food.noon.com/outlet/BLLNRCPRAA/">
                  Order on Noon
                </a>
              </div>
              <div className="link__box">
                <a href="https://deliveroo.ae/menu/dubai/jafilia/billionaire-cookies?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share">
                  Order on Deliveroo
                </a>
                <a href="https://www.talabat.com/uae/billionaire-cookies">
                  Order on Talabat
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="order__right">
          <img loading="lazy" src={Order_Photo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Order;
