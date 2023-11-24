import React, { useEffect } from 'react'
import { useGlobalContext } from "../../context";
import { LinkComponent, SocialComponent } from '../../utils/links';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './header.css'

const Header = () => {

  const { openSidebar } = useGlobalContext();

  useEffect(() => {
    // Funzione che gestisce lo scroll
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 20) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className="nav">
      <div className="container nav-container">
        <header className="nav-header">
          <Link to="/" className="nav-brand">
            <h3>The Mixologist's Playground</h3>
          </Link>
          <div className="nav-toggler">
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
              <FaBars className="nav-icon" />
            </button>
          </div>
        </header>
        <LinkComponent classLink="nav-links" />
        <SocialComponent classSocial="socialTop" />
      </div>
    </nav>
  )
}

export default Header
