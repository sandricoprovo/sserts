import React from 'react';

// Custom Components
import HeroBanner from '../components/Hero';
import DessertCard from '../components/DessertCard';
import { dessertGallery } from '../data/dessertGallery';

const Home = () => {
  const desserts = dessertGallery.map((dessert, index) => (
    <DessertCard
      key={index}
      imgName={dessert.imgName}
      name={dessert.name}
      cost={dessert.cost}
      quantity={dessert.quantity}
    />
  ));
  return (
    <>
      <HeroBanner />
      <main className="content__wrapper">
        <section className="content__header">
          <h1 className="header2">The Gallery</h1>
          <p className="paragraph">
            Our eight most popular desserts as of Wednesday, November 18, 2020
          </p>
        </section>
        <section className="content__desserts">{desserts}</section>
      </main>
    </>
  );
};

export default Home;
