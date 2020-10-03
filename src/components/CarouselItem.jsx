import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play.svg'
import addIcon from '../assets/images/add.svg'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
   <div className="carousel-item">
      <img className="carousel-item-img" src={cover} alt={title}/>
      <div className="carousel-item__details">
         <div>
            <img className="details-icon" src={ playIcon } alt="play" />
            <img className="details-icon" src={ addIcon } alt="add" />
         </div>
         <p className="carousel-item__details--title">{title} - {year}</p>
         <p className="carousel-item__details--subtitle">{Math.floor(duration/60)}hrs {duration%60}mins</p>
      </div>
   </div>
)

export default CarouselItem;