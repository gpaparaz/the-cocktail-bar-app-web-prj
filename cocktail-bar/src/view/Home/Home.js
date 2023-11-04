import React from "react";
import { useGlobalContext } from "../../context";
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

const Home = () => {
  const numberOfRequests = 8;

  const { isLoading, data, isError } = useMultipleFetch(numberOfRequests);

  const reviews = info.reviews.slice(-3);
  console.log(reviews)

  return (
    <section>
      <Hero img = {heroHome} disableOverlay = {true}>
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
          <Cocktails data={data} />
        ) : null}
      </div>

      <div className="container-sm">
        <h2 className="mt-5">Ultime recensioni</h2>
        <div className="d-flex flex-wrap justify-content-center">
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
