import React from 'react'
import Social from './social.jsx'
import Data from './data.jsx'
import './home.css'
import ScrollDown from './scrollDown.jsx'
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        
        <div className="home__content grid">
          <Social/>
          <div className="home__img"></div>
          <Data/>
        </div>
        <ScrollDown/>

      </div>


    </section>
    
  )
}

export default Home