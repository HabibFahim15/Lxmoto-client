import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AllBikeCard = ({motor}) => {
  const { name,image, price, description, brand,  availability} = motor
  return (
    <div>
      <Fade damping={0.5}>
      <div class="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
      <div class="block overflow-hidden">
      <Fade damping={0.5}>
      <img className='w-full h-64 rounded-2xl' src={image} alt="Card image" />
      </Fade>
      </div>
      <div class="p-4">
      <div className='flex justify-between'>
      <h4 class=" font-semibold  text-xl mb-2 capitalize transition-all duration-500 ">{name}</h4>
      <p class="text-green-400 font-semibold mb-1">{availability}</p>
      </div>
      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mt-1"> {description} </p>
      <div className=' flex justify-between mt-2'>
        <p className='text-red-400 font-semibold mb-1'>Price: ${price}</p>
        <p className="badge badge-accent">{brand}</p>
      </div>
     <div className='mt-4'>
     <button class="bg-blue-600 mr-2 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Add to Cart</button>
     <button class="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Details</button>
     </div>
      </div>
      </div>
      </Fade>
    </div>
  );
};

export default AllBikeCard;