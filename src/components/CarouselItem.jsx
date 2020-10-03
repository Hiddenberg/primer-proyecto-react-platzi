import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play.svg'
import addIcon from '../assets/images/add.svg'

const POSTER_URL = 'https://image.tmdb.org/t/p/w342'
const CarouselItem = ({ poster_path, title, release_date, overview }) => (
   <div className="carousel-item">
      <img className="carousel-item-img" src={`${POSTER_URL}${poster_path}`} />
      <div className="carousel-item__details">
         <div>
            <img className="details-icon" src={ playIcon } alt="play" />
            <img className="details-icon" src={ addIcon } alt="add" />
         </div>
         <p className="carousel-item__details--title">{title} - {release_date}</p>
         <p className="carousel-item__details--subtitle">{overview}</p>
      </div>
   </div>
)

export default CarouselItem;