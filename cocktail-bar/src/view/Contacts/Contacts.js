import React from 'react'
import style from './contacts.css'
import Hero from '../../components/Hero/Hero'
import contactsHero from '../../assets/image/contacts-hero.jpg'

const Contacts = () => {
  return (
    <section>
      <Hero img = {contactsHero}>
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
    </section>
  )
}

export default Contacts
