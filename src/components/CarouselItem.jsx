import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/style/components/CarouselItem.scss';
import playIcon from '../assets/img/icons8-play-64.png';
import plusIcon from '../assets/img/icons8-plus-64.png';
import removeIcon from '../assets/img/remove-icon-64.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img src={playIcon} alt="Play" />
          </Link>
          {isList ? (
            <img
              src={removeIcon}
              alt="Remove"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img src={plusIcon} alt="Plus" onClick={handleSetFavorite} />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.proptypes = {
  cover: Proptypes.string,
  title: Proptypes.string,
  year: Proptypes.number,
  contentRating: Proptypes.string,
  duration: Proptypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
