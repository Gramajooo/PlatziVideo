import React from 'react';
import '../assets/style/components/CarouselItem.scss';
import play from '../assets/img/icons8-play-64.png';
import plus from '../assets/img/icons8-plus-64.png';

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://source.unsplash.com/random"
      alt=""
    />
    <div className="carousel-item__details">
      <div>
        <img src={play} alt="Play" />
        <img src={plus} alt="Plus" />
      </div>
      <p className="carousel-item__details--title">Titulo descriptivo</p>
      <p className="carousel-item__details--subtitle">2020 17+ 117 min</p>
    </div>
  </div>
);

export default CarouselItem;
