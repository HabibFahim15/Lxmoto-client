import React, { useEffect, useState } from 'react';
import AllBikeCard from './AllBikeCard';

const AllBike = () => {
  const [motors, setMotor] = useState([]);

  useEffect(() => {
    fetch('https://lxmoto-server.vercel.app/allBIke')
      .then(res => res.json())
      .then(data => setMotor(data))

  }, [])
  console.log(motors);
  return (
    <div>
      <div className='text-center container my-8'>
        <h1 className='md:text-5xl text-2xl font-bold'>All Bikes</h1>
        <p className='text-lg font-medium'>Explore our collection of premium bikes.</p>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            motors.map(motor => <AllBikeCard key={motor._id} motor={motor} />)
          }
        </div>
      </div>
    </div>
  );
};

export default AllBike;