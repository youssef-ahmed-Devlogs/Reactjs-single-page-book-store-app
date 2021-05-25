import React from "react";
import "./HeroSection.css";
import image from "../../home.jpg";

function HeroSection() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div className="hero-desc">
          <h1>كــتــابــى</h1>
          <p>أكبر موقع الكترونى لبيع الكتب فى الوطن العربى</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
