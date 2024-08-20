import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBikesCard from "./MyBikesCard";

const MyBikes = () => {
  const { user } = useContext(AuthContext)
  const [items, setItem] = useState()
  useEffect(() => {
    if (user?.email) {
      fetch(`https://lxmoto-server.vercel.app/allBIke/mybike/${user.email}`)
        .then((res) => res.json())
        .then((data) =>
          setItem(data))
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

        {
          items && items.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
              {items.map((item) => (
                <MyBikesCard key={item._id} item={item} />
              ))}
            </div>
          ) : (
            <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-cyan-300 md:text-3xl">
              You have not added any bike...
            </h1>
          )
        }
      </div>
    </div>

  );
};

export default MyBikes;