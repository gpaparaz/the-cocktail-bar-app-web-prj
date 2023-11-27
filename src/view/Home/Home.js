import React from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import useMultipleFetch from "../../useMultipleFetch";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Cocktails from "../../components/Cocktails/Cocktails";
import style from "./home.css";
import info from '../../utils/info.json'
import Reviews from "../../components/Reviews/Reviews";
import heroHome from '../../assets/image/hero-home.jpg'
import  ScrollToTopOnMount  from '../../utils/ScrollToTop' 

const Home = () => {
  const numberOfRequests = 8;

  const { isLoading, data, isError } = useMultipleFetch(numberOfRequests);

  const reviews = info.reviews.slice(-3);

  return (
    <section className="mb-5">
      <ScrollToTopOnMount />
      <Hero img = {heroHome} disableOverlay = {true}>
        <div className="hero">
          <div className="hero-text">
            <div className="hero-title">
              <h2 className="brand-color">The Mixologist's Playground</h2>
              <h4>Dove cocktail e delizie culinarie danzano insieme in perfetta armonia</h4>
            </div>
            <p>
            Soddisfa le tue papille gustative ed esplora le nostre straordinarie creazioni di drink e non solo
            </p>
            <Link to="/" className="btn btn-primary">
              Scopri di più
            </Link>
          </div>
        </div>
      </Hero>

      <div className="container-sm px-5">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
        ) : data && data.length > 0 ? (
          <>
          <h2 className="mt-5">I drink del momento</h2>
          <Cocktails data={data} />
          </>
        ) : null}
      </div>

      <div className="container-sm">
        <h2 className="mt-5 mb-3">Ultime recensioni</h2>
        <Link to="/about#reviews">Vai alla sezione delle recensioni</Link>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          {
            reviews.map((review) => {
              return <Reviews key={review.id} review={review} showUserAvatar={false} />
            })
          }
          </div>
      </div>
    </section>
  );
};

export default Home;
