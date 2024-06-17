import React from 'react';
import "./Project.css";
import projectData from './data';

function Projects() {
  return (
    <section className="Projects section container" id="projects">
          <h1 className="section__title">Projects</h1>
          <span className="section__subtitle">My personal Projects</span>

         <div className="projects__container">
            {
                projectData.map(
                    
                    ({id,title,description,link,status})=>{
                        return <div className="project__card" key={id}>

                            <h3 className="project__title">
                                {title}
                            </h3>
                            <p className="project__description">
                                {description}
                            </p>
                            <div className="projectCard__footer">
                            <a href={link} className="project__visit">visit</a>
                            <p>status-{status}</p>
                            </div>
                        </div>
                    }
                )
            }
         </div>
    </section>
  )
}

export default Projects