import React from 'react'
import defaultImage from "../assets/image/home-hero.jpg";

const Hero = ({ children, img }) => {
    const image = img ? img : defaultImage;
    return (
      <div
        className="hero-img-container"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay" >
          <div className="container hero-container">{children}</div>
        </div>
      </div>
    );
}

export default Hero
