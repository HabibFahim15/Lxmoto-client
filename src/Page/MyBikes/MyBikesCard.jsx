import React from 'react';

const MyBikesCard = ({item}) => {
  const {name, brand, color, price, description, engineCapacity,topSpeed,email,image} = item;
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
    <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
      <img src={image} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    </a>

    <div className="flex flex-col gap-2 p-4 lg:p-6">
      <span className="text-sm dark:text-gray-400">{brand}</span>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{name}</a>
      </h2>
      <p className="dark:text-gray-300">{description}</p>
      <div className='flex justify-between gap-2'>
        <a href="" className="font-semibold text-indigo-400 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Price: ${price}</a>
        <h3 href="" className="font-semibold  transition duration-100 hover:text-indigo-600 active:text-indigo-700">{engineCapacity} CC</h3>
      </div>
    </div>
  </div>
  );
};

export default MyBikesCard;