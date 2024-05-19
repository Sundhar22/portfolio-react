import React from 'react'
import WebDev from './WebDev'
import AppDev from './AppDev'
import Others from './Others'
import './skill.css'

const skills = () => {
return (
    <section className="skills__section section" id='skills'>
        <h2 className="section__title">skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">

        <WebDev/>
        <AppDev/>
        <Others/>
        </div>

    </section>
)
}

export default skills