import "./Project.css";
import data from './data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
function Projects() {
  return (
    <section className="projects section container" id="projects">
          <h1 className="section__title">Projects</h1>
          <span className="section__subtitle">My personal Projects</span>

         <Swiper className="projects__container"
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          578: {
            slidesPerView: 2,
          },
          
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }
        }}
        modules={[Pagination]}         
         >

          
            {
                data.map(                    
                    ({id,title,description,link,status})=>{
                        return (
                            <SwiperSlide className="project__card" key={id}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="project__card-footer">
                                <a href={link}>visit</a>
                                <span> {status}</span>
                                </div>
                            </SwiperSlide>

                        );
                    }
                )
            }
         </Swiper>
    </section>
  )
}

export default Projects