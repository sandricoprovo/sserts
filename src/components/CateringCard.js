import React from 'react';
import PropTypes from 'prop-types';

const DailyDessert = ({ imgName, imgAlt, name, description }) => (
  <div className="catering-card__container">
    <img className="catering-card__img" src={imgName} alt={imgAlt} />
    <div className="catering-card__info">
      <h1 className="header5 catering-card__title">
        {name} <span />
      </h1>
      <p className="paragraph">{description}</p>
      <p className="catering-card__cost paragraph">
        Call us or drop in for more details.
      </p>
    </div>
  </div>
);

DailyDessert.propTypes = {
  imgName: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default DailyDessert;
