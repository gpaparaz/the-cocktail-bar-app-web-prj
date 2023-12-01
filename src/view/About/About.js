import React from "react";
import heroAbout from "../../assets/image/hero-about-2.png";
import Hero from "../../components/Hero/Hero";
import info from '../../utils/info.json'
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage";
import  ScrollToTopOnMount  from '../../utils/ScrollToTop'

const About = () => {
  
  return (
    <section>
      <ScrollToTopOnMount />
      <Hero img={heroAbout}>
        <div className="hero">
          <div className="hero-text">
            <div className="hero-title">
              <h3>In un connubio unico di creatività e passione, nasce The Mixologist's Playground, <br/> un'oasi moderna dove l'arte dei cocktail si fonde con l'atmosfera rilassata di un playground urbano.</h3>
            </div>

          </div>
        </div>
      </Hero>
      <div className="container-sm mb-5" id="allReviews">
        <h2 className="mt-5">Recensioni locale</h2>
        <ReviewsPage reviewsPerPage ={4} />
      </div>
    </section>
  );
};

export default About;
