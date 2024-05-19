import React from 'react'
import './skill.css'


const Others = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Others</h3>
        <div className="skills__box">
             <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Java</div>
                        <span className="skill__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">SpringBoot</div>
                        <span className="skill__level">Basic</span>

                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Git&GitHub</div>
                        <span className="skill__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Docker</div>
                        <span className="skill__level">Intermediate</span>

                    </div>
                </div>
                
             </div>
             <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Linux Commands</div>
                        <span className="skill__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">Python</div>
                        <span className="skill__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">SQL</div>
                        <span className="skill__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <div className="skills__name">DSA ProblemSolving</div>
                        <span className="skill__level">Intermediate</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Others