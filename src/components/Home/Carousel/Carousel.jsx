
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination, Autoplay } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Carousel = () => {
  return (
    <div className=' my-8'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-3xl"
      >
        
        <SwiperSlide className="relative">
  <img className="md:h-[700px] h-[500px] w-full opacity-60" src="https://powersports.honda.com/-/media/products/segment/street/sport/category-mp/hero/desktop/2024/sport-segment-hero-01-2400x1350.jpg" alt="Headphone" />
  <div className="absolute top-1/2 left-[50%] md:left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-center md:text-left">
    <Fade direction="down">
      <h1 className="md:text-4xl my-2 text-lg font-bold text-white">Best Motorcycles</h1>
    </Fade>
    <Fade direction="down">
      <h1 className="md:text-6xl my-2 text-xl font-extrabold text-white">Best Motorcycles</h1>
    </Fade>
    <Fade direction="down">
      <p className="text-gray-200 my-2 md:text-sm text-xs mt-6">Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p>
    </Fade>
    <Fade direction="up">
      <h1 className="md:text-2xl text-xl my-2 font-semibold text-white">Phone: 123 456 786</h1>
    </Fade>
    <Fade direction="up">
      <Link to="#" className="relative inline-flex items-center justify-center md:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-center md:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Add To Cart</span>
      </Link>
    </Fade>
  </div>
</SwiperSlide>
        <SwiperSlide className="relative">
  <img className="md:h-[700px] h-[500px] w-full opacity-60" src="https://t3.ftcdn.net/jpg/05/34/63/60/360_F_534636028_ZPuCsi4guXQOZYHtqfi8QbH5jAhN5oRg.jpg" alt="Headphone" />
  <div className="absolute top-1/2 left-[50%] md:left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-center md:text-left">
    <Fade direction="down">
      <h1 className="md:text-4xl my-2 text-lg font-bold text-white">Best Motorcycles</h1>
    </Fade>
    <Fade direction="down">
      <h1 className="md:text-6xl my-2 text-xl font-extrabold text-white">Best Motorcycles</h1>
    </Fade>
    <Fade direction="down">
      <p className="text-gray-200 my-2 md:text-sm text-xs mt-6">Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p>
    </Fade>
    <Fade direction="up">
      <h1 className="md:text-2xl text-xl my-2 font-semibold text-white">Phone: 123 456 786</h1>
    </Fade>
    <Fade direction="up">
      <Link to="#" className="relative inline-flex items-center justify-center md:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-center md:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Add To Cart</span>
      </Link>
    </Fade>
  </div>
</SwiperSlide>

        


      </Swiper>

    </div>
  );
};

export default Carousel;