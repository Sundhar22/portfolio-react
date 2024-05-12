import React from 'react'
import './home.css'
import scrollIcon from '../../assets/scroll.svg'
function ScrollDown() {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <img src={scrollIcon} alt="mouse" className="home__scroll-image" />
                <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown