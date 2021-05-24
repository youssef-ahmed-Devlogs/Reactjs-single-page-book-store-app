import React from "react";
import { Link } from "react-router-dom";

function Banner({ src, path }) {
  return (
    <Link to={path}>
      <img src={src} alt="banner" />
    </Link>
  );
}

export default Banner;
