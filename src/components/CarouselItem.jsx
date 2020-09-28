import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const URL_IMAGE = "https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg"

const CarouselItem = () => (
   <div className="carousel-item">
      <img className="carousel-item-img" src={URL_IMAGE} />
      <div className="carousel-item__details">
         <div>
            <img className="details-icon" src="src/assets/images/play.svg" alt="play" />
            <img className="details-icon" src="src/assets/images/add.svg" alt="add" />
         </div>
         <p className="carousel-item__details--title">Titulo descriptivo</p>
         <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
   </div>
)

export default CarouselItem;