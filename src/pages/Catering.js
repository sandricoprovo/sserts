import React from 'react';

// Custom Components
import HeroBanner from '../components/Hero';
import CarteringCard from '../components/CateringCard';

// Dessert images
import cateringImg from '../assets/images/catering_spread.jpg';
import weddingImg from '../assets/images/weddings.jpg';

const Catering = () => (
  <>
    <HeroBanner />
    <main className="content__wrapper">
      <section className="catering__header">
        <h1 className="header2">Catering</h1>
        <p className="paragraph">Check out our catering options below.</p>
      </section>
      <section>
        <CarteringCard
          imgName={cateringImg}
          imgAlt="An assortment of dessert laid out on a plater."
          name="Catering"
          description="If you really love our desserts, you can order a bunch of them for your gatherings! We can cater and provide you with an assortment of any of our regular desserts. Pick up to four from our gallery, or two from a previous dessert."
        />
        <div style={{ margin: '88px 0' }} />
        <CarteringCard
          imgName={weddingImg}
          imgAlt="A wedding cake surrounded by five cupcakes."
          name="Weddings Cakes"
          description="Are you getting married soon and are wondering where you can get a memorable wedding cake? Well, Sserts has you covered. You can order your cake up to two months in advance, and we base our cake designs from input you give us. As a thank you for your business, we also include a special matching cupcake for each person in your wedding party."
        />
      </section>
    </main>
  </>
);

export default Catering;
