import React from 'react';

const Stats = () => {
  return (
    <div>
      <div className="bg-base-100 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    
    <div className="mb-8 md:mb-12">
      <h2 className="mb-4 text-center text-2xl font-bold dark:text-gray-100 md:mb-6 lg:text-3xl">Website Stats</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Total visits, sellers, sold items, and users reflect a website's success. High traffic indicates popularity, the number of sellers shows market appeal, sold items highlight transaction efficiency, and user count measures engagement.</p>
    </div>
    

    <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">50000+</div>
        <div className="text-sm text-indigo-200 sm:text-base">Visit</div>
      </div>
      

      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">3500+</div>
        <div className="text-sm text-indigo-200 sm:text-base">Sold</div>
      </div>

      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">700+</div>
        <div className="text-sm text-indigo-200 sm:text-base">Seller</div>
      </div>
      

      
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">35000+</div>
        <div className="text-sm text-indigo-200 sm:text-base">Users</div>
      </div>
      
    </div>
  </div>
</div>
    </div>
  );
};

export default Stats;