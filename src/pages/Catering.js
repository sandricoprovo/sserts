import React from 'react';

// Custom Components
import HeroBanner from '../components/Hero';
import CarteringCard from '../components/CateringCard';

// Dessert images
import dailyImg from '../assets/images/mouth_water_macoroon.jpg';
// import dailyImg from '../assets/images/mouth_water_macoroon.jpg';

const Catering = () => (
  <>
    <HeroBanner />
    <main className="content__wrapper">
      <section>
        <h1 className="header2">Catering Options</h1>
        <p>Text here</p>
      </section>
      <section>
        <CarteringCard
          imgName={dailyImg}
          imgAlt="Three macaroons stacked on top of each other with a fourth sat beside the stack."
          name="Mouth Water Macaroons"
          cost={3}
          quantity="each"
          description="Have you ever wanted a good macaroon, but didn't want to make them? Well today you're in luck because our daily dessert is a macaroon! Pick from four different flavours, or why not buy an everything box with all the flavours. You know, because yolo right?"
        />
      </section>
    </main>
  </>
);

export default Catering;
