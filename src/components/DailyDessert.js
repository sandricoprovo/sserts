import React from 'react';
import PropTypes from 'prop-types';

const DailyDessert = ({
  imgName,
  imgAlt,
  name,
  cost,
  quantity,
  description,
}) => (
  <div className="daily-dessert__container">
    <img className="daily-dessert__img" src={imgName} alt={imgAlt} />
    <div className="daily-dessert__info">
      <h1 className="header5 daily-dessert__title">
        {name} <span />
      </h1>
      <p className="paragraph">{description}</p>
      <p className="daily-dessert__cost paragraph">{`$${cost} / ${quantity}`}</p>
    </div>
  </div>
);

DailyDessert.propTypes = {
  imgName: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.string,
  description: PropTypes.string,
};

export default DailyDessert;
