import React from "react";
import useContentful from "../useContenful";
import Header from "./Home/Header";
//const LazyHero = React.lazy(() => import('../components/Home/Hero'));
import Hero from "./Home/Hero";

//import AboutUs from "./Home/AboutUs";
const LazyAboutUs = React.lazy(() => import('../components/Home/AboutUs'));
//import Order from "./Home/Order";
const LazyOrder = React.lazy(() => import('../components/Home/Order'));
//const LazyFlavours = React.lazy(() => import('../components/Home/Flavours'));
import Flavours from "./Home/Flavours";
//import Footer from "./Home/Footer";
const LazyFooter = React.lazy(() => import('../components/Home/Footer'));

const Home = () => {
  const [image]= useContentful();

  return (
    <div>
      <Header />
      <Hero />
      <Flavours image={image} />
      <LazyAboutUs />
      <LazyOrder />
      <LazyFooter />
    </div>
  );
};

export default Home;