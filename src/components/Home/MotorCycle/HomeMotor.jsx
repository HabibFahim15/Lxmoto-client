import { useEffect, useState } from "react";
import MotorcycleCard from "./MotorcycleCard";
import { Link } from "react-router-dom";

const HomeMotor = () => {
  const [motors, setMotor] = useState([]);

  useEffect(() => {
    fetch('https://lxmoto-server.vercel.app/allBIke')
      .then(res => res.json())
      .then(data => setMotor(data.slice(-8)))
  }, []);

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="grid gap-3 text-center mb-8">
        <h1 className="mb-4 text-center text-2xl font-bold dark:text-gray-100 md:mb-6 lg:text-3xl">Latest Motorcycles</h1>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Explore our latest collection of premium motorcycles.</p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {motors.map(motor => (
            <MotorcycleCard key={motor._id} motor={motor} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to={"/allbike"} className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomeMotor;
