import React from "react";
import Banner from "./Banner";
import "./AdsBanners.css";

function AdsBanners() {
  return (
    <div className="container">
      <div className="AdsBanners">
        <Banner src="/images/ads-banners/banner1.png" path="/" />
        <Banner src="/images/ads-banners/banner2.png" path="/" />
        <Banner src="/images/ads-banners/banner3.png" path="/" />
        <Banner src="/images/ads-banners/banner4.png" path="/" />
      </div>
    </div>
  );
}

export default AdsBanners;
