import React from 'react';

// Custom Components
import HeroBanner from '../components/Hero';
import DailyDessert from '../components/DailyDessert';
import DessertCard from '../components/DessertCard';
import CTA from '../components/CTA';

// Dessert images
import dailyImg from '../assets/images/mouth_water_macoroon.jpg';
import mintyScotian from '../assets/images/minty_scotian.jpg';
import craneDownBrownie from '../assets/images/crane_down_brownie.jpg';
import haliChip from '../assets/images/hali_chip.jpg';
import mondayMorning from '../assets/images/monday_morning.jpg';
import overBoardIcecream from '../assets/images/overboard_icecream.jpg';
import fruitSurprise from '../assets/images/fruit_surprise.jpg';
import berryGood from '../assets/images/berry_good.jpg';
import holidaySquad from '../assets/images/holiday_squad.jpg';

const Home = () => (
  <>
    <HeroBanner />
    <main className="content__wrapper">
      <section className="content__header" style={{ marginBottom: '24px' }}>
        <h1 className="header2">Daily Dessert</h1>
        <p className="paragraph">
          Check out today's new dessert. Get it before it's gone!
        </p>
        <DailyDessert
          imgName={dailyImg}
          imgAlt="Three macaroons stacked on top of each other with a fourth sat beside the stack."
          name="Mouth Water Macaroons"
          cost={3}
          quantity="each"
          description="Have you ever wanted a good macaroon, but didn't want to make them? Well today you're in luck because our daily dessert is a macaroon! Pick from four different flavours, or why not buy an everything box with all the flavours. You know, because yolo right?"
        />
      </section>
      <section className="content__header">
        <h1 className="header2">The Gallery</h1>
        <p className="paragraph">Our eight most popular desserts.</p>
      </section>
      <section className="content__desserts">
        <DessertCard
          imgName={mintyScotian}
          imgAlt="A glass with an Oreo filled ice cream sunday inside."
          name="Minty Scotia"
          cost={10}
          quantity="each"
        />
        <DessertCard
          imgName={craneDownBrownie}
          imgAlt="A brownie with a scope of vanilla ice cream, topped with a breadstick, chocolate & caramel drizzle."
          name="Crane Down Brownie"
          cost={6}
          quantity="each"
        />
        <DessertCard
          imgName={haliChip}
          imgAlt="A flatlay of gooey chocolate chip cookies."
          name="The Hali Chip"
          cost={3}
          quantity="each"
        />
        <DessertCard
          imgName={mondayMorning}
          imgAlt="Two coffee tasting, caffeine filled cupcakes with a shot of espresso."
          name="Monday Morning"
          cost={5}
          quantity="each"
        />
        <DessertCard
          imgName={overBoardIcecream}
          imgAlt="An upside down scoop of ice cream with a waffle cone on top."
          name="Overboard Ice Cream"
          cost={2}
          quantity="scoop"
        />
        <DessertCard
          imgName={fruitSurprise}
          imgAlt="A slice of fruit infused cheesecake."
          name="Fruit Surprise"
          cost={2}
          quantity="slice"
        />
        <DessertCard
          imgName={berryGood}
          imgAlt="Six cupcakes with strawberry icing and a half cut strawberry on top."
          name="Berry Good"
          cost={6}
          quantity="each"
        />
        <DessertCard
          imgName={holidaySquad}
          imgAlt="An assortment of frosted christmas shaped cookies."
          name="Holiday Squad"
          cost={2}
          quantity="each assorted"
        />
      </section>
      <CTA />
    </main>
  </>
);

export default Home;
