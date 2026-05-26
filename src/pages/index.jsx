import { useState } from "react";
import "../App.css";

import logoImg from "../assets/images/LogoImage.png";
import specialOfferImage from "../assets/images/SpecialOffer.jpg";
import bigImage1 from "../assets/images/BigImage1.jpg";

import Button from "../components/Button.jsx";
import BigImage from "../components/BigImage.jsx";
import AboutUs from "../components/AboutUs.jsx";
import SwiperShowcase from "../components/SwiperShowcase.jsx";
import Title from "../components/Title.jsx";
import Services from "../components/Services.jsx";

function App() {
  return (
    <>
      <img id="logoImg" src={logoImg}></img>

      <BigImage path={specialOfferImage} />

      <AboutUs
        headText="WHO WE ARE"
        slogan="We're Our Blooms® and we're here to help you find your floral story."
      />

      <SwiperShowcase />

      <Title
        title="WHAT WE DO"
        description="We bring a touch of that simple magic into your world."
      />

      <Services />

      <BigImage path={bigImage1} />

      <AboutUs
        headText="WORK WITH US"
        slogan="Discover how we can add a touch of natural beauty to your next event."
      />
    </>
  );
}

export default App;
