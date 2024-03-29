import React from 'react';
import NavTop from "./components/Navigation/NavTop";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Event from "./components/Event/Event.jsx";
import Gallary from "./components/Gallary/Gallary.jsx";
import Batch22  from "./components/Team/Batch22_23/Batch22-23.jsx";
import Slider from "./components/Slide/Slider.jsx";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact";
import "aos/dist/aos.css";
function Page(){
  return (
    <>
      <NavTop />
      <Navigation />
      <Home />
      <About /> 
      <Event /> 
      <Gallary />
      <Slider />
      <Batch22 /> 
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Page;

