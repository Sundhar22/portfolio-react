import React from 'react'
import './skill.css'

const AppDev = () => {
  return (

    <div className="skills__content">
        <h3 className="skills__title">App Development</h3>
        <div className="skills__box">
             <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Flutter</div>
                        <span className="skill__level">Advance</span>

                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Dart</div>
                        <span className="skill__level">Intermediate</span>

                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">       Bloc (<span>state-management</span>)</div>
                        <span className="skill__level">Advance</span>

                    </div>
                </div>

                
             </div>
             <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">clean architecture</div>
                        <span className="skill__level">Advance</span>

                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">FireBase</div>
                        <span className="skill__level">Advance</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">MongoDb</div>
                        <span className="skill__level">Intermediate</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default AppDev