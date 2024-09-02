import About_info from "../../assets/about_info.png";
const AboutUs = () => {
  return (
    <div className="container container__about" id="about">
      <img src={About_info} alt="" />
      <div className="about__box">
      <h1>About</h1>
      <p>
        We're Billionare Cookies, Dubai's first rotating cookie concept with
        brand new flavours dropping every single week available for a limited
        time only. All recipies are developed by hand in our custom cookie
        kitchen in Dubai.
      </p>
      <p>
      Our mission is to create a fun, memorable experience from product to packaging to interactions with customers. How did it all begin? Two best friends fueled by a love of cookies and making memories over food.
      </p>

      </div>
    </div>
  );
};
export default AboutUs;
