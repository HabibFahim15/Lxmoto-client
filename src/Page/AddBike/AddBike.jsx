const AddBike = () => {
  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const bikeName = form.bikeName.value;
    const brand = form.brand.value;
    const color = form.color.value;
    const price = form.price.value;
    const details = form.details.value;
    const engine = form.engine.value;
    const speed = form.speed.value;

    console.log(bikeName, brand, color, price, details, engine, speed);
  };
  return (
    <div className=" dark:bg-base-100 py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-10  md:mb-16">
        <h2 className="mb-4 dark:text-white text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
          Add New Bike
        </h2>
        <p className="mx-auto dark:text-white max-w-screen-md text-center text-gray-500 md:text-lg">
          Here you can add new bike and make it available.
        </p>
      </div>

      <form onSubmit={handleAddQuery} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base">Bike Name*</label>
          <input name="bikeName" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div>
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base"> Brand*</label>
          <input name="brand" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div className="col-span-2">
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base">Color*</label>
          <input name="color" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div className="col-span-2">
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base">Price*</label>
          <input name="price" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div className="col-span-2">
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base">Engine CC*</label>
          <input name="engine" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
        <div className="col-span-2">
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base">Top Speed*</label>
          <input name="speed" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div className="col-span-2">
          <label className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base">Details*</label>
          <textarea name="details" required className="w-full rounded border bg-base-100 px-3 py-2 text-gray-800 dark:text-white outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
        </div>

        <div className="flex items-center justify-between sm:col-span-2">
          
          <input className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default AddBike;