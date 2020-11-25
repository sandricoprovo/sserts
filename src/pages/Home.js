import React from 'react';

// Custom Components
import HeroBanner from '../components/Hero';
import DessertCard from '../components/DessertCard';
import CTA from '../components/CTA';

// Dessert images
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
      <section className="content__header">
        <h1 className="header2">The Gallery</h1>
        <p className="paragraph">Our eight most popular desserts.</p>
      </section>
      <section className="content__desserts">
        <DessertCard
          imgName={mintyScotian}
          name="Minty Scotia"
          cost={10}
          quantity="each"
        />
        <DessertCard
          imgName={craneDownBrownie}
          name="Crane Down Brownie"
          cost={6}
          quantity="each"
        />
        <DessertCard
          imgName={haliChip}
          name="The Hali Chip"
          cost={3}
          quantity="each"
        />
        <DessertCard
          imgName={mondayMorning}
          name="Monday Morning"
          cost={5}
          quantity="each"
        />
        <DessertCard
          imgName={overBoardIcecream}
          name="Overboard Ice Cream"
          cost={2}
          quantity="scoop"
        />
        <DessertCard
          imgName={fruitSurprise}
          name="Fruit Surprise"
          cost={2}
          quantity="slice"
        />
        <DessertCard
          imgName={berryGood}
          name="Berry Good"
          cost={6}
          quantity="each"
        />
        <DessertCard
          imgName={holidaySquad}
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
