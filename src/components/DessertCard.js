import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Component Elements
import image from '../assets/images/minty_scotian.jpg';

const DessertCard = ({ imgName, name, cost, quantity }) => (
  // const [image, setImage] = useState('');

  // useEffect(() => {
  //   // dynamically importing each dessert image based on dessert name, and setting that to state to be used by the rendered component
  //   import(`../assets/images/${imgName.toLowerCase()}.jpg`)
  //     .then((imageString) => {
  //       console.log(imageString);
  //       // Setting imgName string to state
  //       setImage(imageString);
  //     })
  //     .catch((err) => console.log(err));
  // });

  <div className="dessert__container">
    <img className="dessert__img" src={image} alt="" />
    <div className="dessert__info">
      <h1 className="header5 dessert__title">{name}</h1>
      <p className="dessert__cost paragraph">{`$${cost} /${quantity}`}</p>
    </div>
  </div>
);
DessertCard.propTypes = {
  imgName: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.string,
};

export default DessertCard;
