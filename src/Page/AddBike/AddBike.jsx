const AddBike = () => {
  return (
    <div className="bg-base-100 py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">Add Bike</h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg">
          Here you can add your bike collection.
        </p>
      </div>
      <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="mb-2 inline-block text-sm sm:text-base">First Name</label>
          <input name="first-name" className="w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-2 inline-block text-sm sm:text-base">Last Name*</label>
          <input name="last-name" className="w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div>
          <label htmlFor="first-name" className="mb-2 inline-block text-sm sm:text-base">First Name</label>
          <input name="first-name" className="w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-2 inline-block text-sm sm:text-base">Last Name*</label>
          <input name="last-name" className="w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div>
          <label htmlFor="first-name" className="mb-2 inline-block text-sm sm:text-base">First Name</label>
          <input name="first-name" className="w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-2 inline-block text-sm sm:text-base">Last Name*</label>
          <input name="last-name" className="w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <input type="file" className="file-input file-input-bordered w-full" />
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-2 inline-block text-sm sm:text-base">Description*</label>
          <textarea name="Description" className="h-64 w-full rounded border bg-base-100 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
        </div>
        
        
          
        
         <div className="relative inline-flex items-center justify-center md:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 w-28 rounded-full hover:bg-white group">
         <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
         <input type="submit" value="Submit" className="relative  text-center md:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600" />
         </div>
        
        
      </form>
    </div>
  </div>
  
  );
};

export default AddBike;