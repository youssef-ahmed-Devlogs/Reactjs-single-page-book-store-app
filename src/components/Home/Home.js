import React from "react";
import AdsBanners from "../AdsBanners/AdsBanners";
import ChooseForYou from "../ChooseForYou/ChooseForYou";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

function Home() {
  return (
    <>
      <HeroSection />
      <AdsBanners />
      <ChooseForYou />
    </>
  );
}

export default Home;
