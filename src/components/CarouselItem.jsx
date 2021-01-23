import React from 'react';
import Proptypes from 'prop-types';
import '../assets/style/components/CarouselItem.scss';
import play from '../assets/img/icons8-play-64.png';
import plus from '../assets/img/icons8-plus-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img src={play} alt="Play" />
        <img src={plus} alt="Plus" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.proptypes = {
  cover: Proptypes.string,
  title: Proptypes.string,
  year: Proptypes.number,
  contentRating: Proptypes.string,
  duration: Proptypes.number,
};

export default CarouselItem;
