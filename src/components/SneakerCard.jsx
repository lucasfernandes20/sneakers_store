import React from 'react';
import PropTypes from 'prop-types';

function SneakerCard({ sneaker }) {
  return (
    <div className="sneaker-card-content">
      <img src={sneaker.image.thumbnail} alt="sneaker" />
      <div className="sneaker-card-infos">
        <span>{sneaker.releaseYear}</span>
        <h2>{sneaker.name}</h2>
      </div>
    </div>

  );
}

SneakerCard.propTypes = {
  sneaker: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SneakerCard;
