import React from 'react';
import PropTypes from 'prop-types';

const DessertCard = ({ imgName, imgAlt, name, cost, quantity }) => (
  <div className="dessert__container">
    <img className="dessert__img" src={imgName} alt={imgAlt} />
    <div className="dessert__info">
      <h1 className="header5 dessert__title">
        {name} <span />
      </h1>
      <p className="dessert__cost paragraph">{`$${cost} / ${quantity}`}</p>
    </div>
  </div>
);
DessertCard.propTypes = {
  imgName: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.string,
};

export default DessertCard;
