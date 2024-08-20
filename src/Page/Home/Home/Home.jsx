import React, { useState } from 'react';
import Carousel from '../../../components/Home/Carousel/Carousel';
import HomeMotor from '../../../components/Home/MotorCycle/HomeMotor';
import Stats from '../../../components/Home/TotalSale/Stats';
import NewsLetter from '../../../components/Home/NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Stats />
      <HomeMotor />
      <NewsLetter />
    </div>
  );
};

export default Home;