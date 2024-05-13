import React from 'react'
import hi from "../../assets/hand.svg"
import send from "../../assets/send.svg"
import '../../App.css'
function Data() {
    return (
        <div className="home__data">
            
            <h1 className="home__title">
                Mohanasundharam
                <img className='home__hand' src={hi} alt="hand" />
            </h1>
            
            <h3 className="home__subtitle">
                Developer & Creative Technologist
            </h3>
            
            <p className="home__description">
                A creative Flutter developer from India with a passion for crafting innovative apps and a drive to excel in React and DevOps.            
            </p>
            
            <a href='#contact' className="home__button button button--flex">
                Say Hello <img  className='button__icon' src={send} alt="send" />
            </a>

        </div>
    )
}

export default Data