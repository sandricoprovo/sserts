import React from 'react';

// Image imports
import Logo from '../assets/logo.svg';
import BannerImg1 from '../assets/images/header-1.jpg';
import BannerImg2 from '../assets/images/header-2.jpg';

const HeroBanner = () => (
  <section className="hero__container">
    <div className="hero__copy">
      <img className="hero__logo" src={Logo} alt="" />
      <p>Your Haligonian stop for healthy and hip desserts!</p>
      <p>
        Todays Specials: <br />
        <span className="paragraph__small">
          Raspberry & Blueberry Ice Cream <br />
          Bacon Flavoured Cupcakes <br />
        </span>
      </p>
    </div>
    <div className="hero__images">
      <img
        src={BannerImg1}
        alt="A fruit dessert with blueberries and strawberries in a cup."
      />
      <img src={BannerImg2} alt="Cupcakes with pigs on top." />
    </div>
  </section>
);

export default HeroBanner;
