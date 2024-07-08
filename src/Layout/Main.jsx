import { Outlet } from "react-router-dom";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto min-h-[calc(100vh-145px)]">
      <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;