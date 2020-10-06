import React from 'react';
import { connect } from 'react-redux';
import setFavorite from '../actions/'; /* como ya tenemos un index definido aqui, no es necesario llamar especificamente al archivo */
import Proptypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play.svg'
import addIcon from '../assets/images/add.svg'

const CarouselItem = (props) => {
   /* Aqui ↓ utilizamos la deconstruccion para traer directamente las propiedades de props en lugar de agregarlas desde los parametros de la funcion (↑) */
   const { cover, title, year, duration } = props;
   const handleSetFavorite = () => {
      props.setFavorite(
         {
            cover, title, year, duration
         }
      )
   }
   return (
      <div className="carousel-item">
         <img className="carousel-item-img" src={cover} alt={title}/>
         <div className="carousel-item__details">
            <div>
               <img className="details-icon" src={ playIcon } alt="play" />
               <img className="details-icon" src={ addIcon } alt="add" onClick={handleSetFavorite}/>
            </div>
            <p className="carousel-item__details--title">{title} - {year}</p>
            <p className="carousel-item__details--subtitle">{Math.floor(duration/60)}hrs {duration%60}mins</p>
         </div>
      </div>
   )
}

CarouselItem.propTypes = {
   cover: Proptypes.string,
   title: Proptypes.string,
   year: Proptypes.number,
   contentRating: Proptypes.string,
   duration: Proptypes.number,
}

const mapDispatchToProps = {
   setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);