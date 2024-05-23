import React, { useState } from "react";
import './Services.css'
const Services = () => {

  const [showModal, setShowModal] = useState(0);

  const openModal = (index) => {
    setShowModal(index);
  }
  

  return (
    <section className="services section" id="services">
      <h1 className="section__title">Services</h1>
      <p className="section__subtitle">What I Offer</p>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-mobile-alt   services__icon"></i>

            <h3 className="services__title">
            Flutter App<br/>Development
            </h3>
          </div>

          <span className="services__button" onClick={()=>openModal(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={showModal===1?"services__modal active-modal":"services__modal"}>
            
            <div className="services__modal-content">

              <i className="uil uil-times services__modal-close "onClick={()=>openModal(0)}></i>

              <h3 className="services__model-title"> Flutter App Development</h3>
              
              <p className="services__model-description">
              I specialize in building robust and beautiful mobile applications using Flutter. My applications adhere to professional industry standards and provide a seamless user experience.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I design and develop the User Interface using Flutter.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I write efficient and clean application logic.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I test the application to ensure its robustness and reliability.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I maintain the application, implementing new features and fixing bugs.
                  </p>
                </li>
                
              </ul>

            </div>
          </div>

        </div>
        <div className="services__content">
          <div>
            <i className="bx bxl-java services__icon"></i>

            <h3 className="services__title">
            Java<br/>Programming
            </h3>
          </div>

          <span className="services__button" onClick={()=>openModal(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={showModal===2?"services__modal active-modal":"services__modal"}>
            
            <div className="services__modal-content">

              <i className="uil uil-times services__modal-close" onClick={()=>openModal(0)}></i>

              <h3 className="services__model-title"> Java Programming</h3>
              
              <p className="services__model-description">
              With my proficiency in Java, I can solve complex problems and build efficient backend services or desktop applications.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I write clean and efficient Java code.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I solve complex problems using Java.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                  I build backend services.
                  </p>
                </li>
                
              </ul>

            </div>
          </div>

        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-react services__icon"></i>

            <h3 className="services__title">
            React<br/>Development
            </h3>
          </div>

          <span className="services__button" onClick={()=>openModal(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={showModal===3?"services__modal active-modal":"services__modal"}>
            
            <div className="services__modal-content">

              <i className="uil uil-times services__modal-close" onClick={()=>openModal(0)}></i>

              <h3 className="services__model-title"> Product Designer</h3>
              
              <p className="services__model-description">
              So, this line of code is creating a grid with a single column that adjusts its width based on the content it contains. This can be useful when you want a grid container to fit its content as closely as possible without causing overflow.
              </p>

              <ul className="services__model-services grid">
                <li className="services__model-service ">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                      I develop the User Interface
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                      Web page development 
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                    I create  ux element Interaction
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                          I position your company brand.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon">
                      
                  </i>
                  <p className="services__modal-info">
                          Design and mockups of products for companies.
                  </p>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
    
  );
};

export default Services;
