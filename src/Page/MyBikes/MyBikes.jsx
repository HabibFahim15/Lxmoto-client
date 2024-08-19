import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyBikes = () => {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/allBIke/mybike/${user.email}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error fetching bikes:', error));
    }
  }, [user])
  return (
    <div className="bg-base-100 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">My Bikes</h2>
      <p className="mx-auto max-w-screen-md text-center dark:text-gray-300 md:text-lg">
        Here you can see your bikes.
      </p>
    </div>
    {/* text - end */}

    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
      {/* article - start */}
      <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
        <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <span className="text-sm dark:text-gray-400">July 19, 2021</span>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
          </h2>
          <p className="dark:text-gray-300">This is a section of some simple filler text, also known as placeholder text.</p>
          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
          </div>
        </div>
      </div>
      {/* article - end */}
    </div>
  </div>
</div>

  );
};

export default MyBikes;