import React from 'react'
import { useGlobalContext } from '../context';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
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
    </section>
  )
}

export default Home
