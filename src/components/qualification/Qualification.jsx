import React, { useState } from "react";
import "./Qualification.css";
const Qualification = () => {

  const [tab, setTab] = useState(1);

  return (
    <section className="qualification section" id="qualification">
      <h1 className="section__title">Qualification</h1>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={tab===1 ?"qualification__button qualification__active button--flex":"qualification__button  button--flex"}
          onClick={()=>setTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"> </i>
            Education
          </div>

          <div className={
            tab===2 ?"qualification__button qualification__active button--flex":"qualification__button  button--flex"
          
          }
          onClick={()=>setTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"> </i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className={tab===2?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Electronics and communication engineering
                </h3>
                <span className="qualification__subtitle">
                  PSNA College of Engineering & Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  11/2021 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                Middle School and High School
                </h3>
                <span className="qualification__subtitle">
                Buds Floursing Hindu Vidyalaya Matric Hss-Oddanchataram
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  03/2023 - 05/2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Elementary School
                </h3>
                <span className="qualification__subtitle">
                SPM Oxford Matric Hr. Sec. School-Kalangipatti
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  11/2021 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          
          <div className={tab===1?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  Ministry of Ayush
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  05/2023 - 11/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Software Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  Peace Music Startup{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  03/2023 - 05/2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
