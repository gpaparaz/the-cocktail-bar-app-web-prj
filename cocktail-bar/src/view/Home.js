import React from 'react'
import { useGlobalContext } from '../context';
import Hero from '../components/Hero/Hero';
import { Link } from 'react-router-dom';
import useMultipleFetch from '../useMultipleFetch';
import Loading from '../components/Loading/Loading'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Cocktails from '../components/Cocktails/Cocktails'

const Home = () => {
  const numberOfRequests = 6;

  const { isLoading, data, isError } = useMultipleFetch(numberOfRequests);
  console.log(data)


  return (
    <section>
    <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color"> Lorem ipsum</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <Link to="/" className="btn btn-primary">
              Scopri di più
            </Link>
          </div>
          
        </div>
      </Hero>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
      ) : data && data.length > 0 ? (
        <Cocktails data={data} />
      ) : null}
    </section>
  )
}

export default Home
