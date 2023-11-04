import React from "react";
import heroAbout from "../../assets/image/hero-about-2.jpg";
import Hero from "../../components/Hero/Hero";
import info from '../../utils/info.json'
import user from "../../assets/image/user.png";
import { BsFillStarFill } from "react-icons/bs";
import Reviews from "../../components/Reviews/Reviews";

const About = () => {
  const reviews = info.reviews;
  return (
    <section>
      <Hero img={heroAbout}>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color"> Lorem ipsum</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </Hero>
      <div className="container-sm">
        <h2>Recensioni locale</h2>
        {reviews.map((review) => {
          return <Reviews review={review} showUserAvatar={true} isFullWidth={true} />
        })}
      </div>
    </section>
  );
};

export default About;
