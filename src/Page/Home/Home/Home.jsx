import React, { useState } from 'react';
import Carousel from '../../../components/Home/Carousel/Carousel';
import HomeMotor from '../../../components/Home/MotorCycle/HomeMotor';

const Home = () => {
  return (
    <div>
      <Carousel />
      <HomeMotor />
    </div>
  );
};

export default Home;