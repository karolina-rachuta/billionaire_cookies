import { useState, useEffect } from "react";
import useContentful from "../useContenful";
import Header from "./Home/Header";
import Hero from "./Home/Hero";
import Info from "./Home/Info";
import AboutUs from "./Home/AboutUs";
import Order from "./Home/Order";
import Flavours from "./Home/Flavours";
import Footer from "./Home/Footer";

const Home = () => {
  const [image, setImage] = useState("");
  const { getImages } = useContentful();

  useEffect(() => {
    getImages().then((response) => setImage(response));
  });
  return (
    <div>
      <Header />
      <Hero/>
      <Flavours image={image}/>
      {/* <Info /> */}
      <AboutUs/>
      <Order />
      <Footer />
    </div>
  );
};

export default Home;
