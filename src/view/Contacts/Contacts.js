import React from 'react'
import style from './contacts.css'
import Hero from '../../components/Hero/Hero'
import contactsHero from '../../assets/image/contacts-hero.jpg'
import maps from '../../assets/image/maps.jpg'

const Contacts = () => {
  return (
    <section>
      <Hero img = {contactsHero}>
        <div className="hero d-flex">
          <div className="hero-text">
            <div className="">
              <h2>The Mixologists's Playground</h2>
              <h4 className='mt-3'>Via Guglielmo Oberdan, 2, Padova</h4>
            </div>
            <h5>
              Per info e prenotazioni chiamare il numero: <b>049-1234578</b>
            </h5>
            <div className='openingTime'>

            <h5 class="fw-semibold">Orari di apertura:</h5>
            <span>Lun-Gio</span>
            <p>16.30 - 23.00</p>
            <span className="mt-1">Ven-Dom</span>
            <p>16.30 - 02.00</p>
            </div>
          
          </div>
            <img className='maps' src={maps} />
        </div> 
      </Hero>
    </section>
  )
}

export default Contacts
