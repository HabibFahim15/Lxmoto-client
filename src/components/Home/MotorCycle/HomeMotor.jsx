import { useEffect, useState } from "react";
import MotorcycleCard from "./MotorcycleCard";

const HomeMotor = () => {
  const [motors, setMotor] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allBIke')
      .then(res => res.json())
      .then(data => setMotor(data))

  },[])
  console.log(motors);
  return (
    <div className="container mx-auto px-4 mb-8">
  <div className="grid gap-3 text-center mb-8">
    <h1 className="text-4xl font-bold">Motorcycles</h1>
    <p className="text-lg">Explore our collection of premium motorcycles.</p>
  </div>

  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {motors.map(motor => (
        <MotorcycleCard key={motor._id} motor={motor} />
      ))}
    </div>
  </div>
</div>


  );
};

export default HomeMotor;