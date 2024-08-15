import React from 'react';
import { Fade } from 'react-awesome-reveal';

const MotorcycleCard = ({motor}) => {
  const {_id, name,image, price, description, brand,  availability} = motor
  return (
    <div>
       <div class="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
      <div class="block overflow-hidden">
      <Fade damping={0.5}>
      <img className='w-full h-64 rounded-2xl' src={image} alt="Card image" />
      </Fade>
      </div>
      <div class="p-4">
      <h4 class=" font-semibold  text-xl mb-2 capitalize transition-all duration-500 ">{name}</h4>
      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-1"> {description} </p>
      <div className=' flex justify-between'>
        <p className='text-red-400 font-semibold mb-1'>Price: ${price}</p>
        <p className="badge badge-accent">{brand}</p>
      </div>
     <div className='mt-1'>
     <button class="bg-blue-600 mr-2 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Add to Cart</button>
     <button class="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Details</button>
     </div>
      </div>
      </div>
    </div>
  );
};

export default MotorcycleCard;