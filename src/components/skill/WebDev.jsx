import React from 'react'
import './skill.css'
const WebDev = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Development</h3>
        <div className="skills__box">
             <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">HTML</div>
                        <span className="skill__level">Basic</span>

                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Css</div>
                        <span className="skill__level">Basic</span>

                    </div>
                </div>
                
             </div>
             
             <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Javascript</div>
                        <span className="skill__level">Basic</span>

                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">React</div>
                        <span className="skill__level">Basic</span>

                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default WebDev