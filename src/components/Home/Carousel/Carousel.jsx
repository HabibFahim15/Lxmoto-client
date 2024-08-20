
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
  <img className="lg:h-[700px] h-[500px] w-full opacity-60" src="https://powersports.honda.com/-/media/products/segment/street/sport/category-mp/hero/desktop/2024/sport-segment-hero-01-2400x1350.jpg" alt="Headphone" />
  <div className="absolute top-1/2 left-[50%] lg:left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-left">
    <Fade direction="down">
      <h1 className="lg:text-4xl my-2 text-md font-bold text-white">Explore Electric Motorcycles</h1>
    </Fade>
    <Fade direction="down">
      <h1 className="lg:text-6xl my-2 text-xl font-extrabold text-white">Ride the Future</h1>
    </Fade>
    <Fade direction="down">
      <p className="text-gray-200 my-2 lg:text-sm text-xs mt-6">Step into the next generation of riding with our electric motorcycles. Supreme Gadgets offers high-performance bikes that blend style and sustainability. Discover the thrill of the future, today.</p>
    </Fade>
    <Fade direction="up">
      <h1 className="lg:text-2xl text-xl my-2 font-semibold text-white">Phone: 123 456 786</h1>
    </Fade>
    <Fade direction="up">
      <Link to="#" className="relative inline-flex items-center justify-center lg:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-center lg:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Add To Cart</span>
      </Link>
    </Fade>
  </div>
</SwiperSlide>
        <SwiperSlide className="relative">
  <img className="lg:h-[700px] h-[500px] w-full opacity-60" src="https://t3.ftcdn.net/jpg/02/76/70/70/360_F_276707060_WpP9bwHWv0Wdqqn0pEgtSuIgXUvgkbs7.jpg" alt="Headphone" />
  <div className="absolute top-1/2 left-[50%] lg:left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-left">
    <Fade direction="down">
      <h1 className="lg:text-4xl my-2 text-md font-bold text-white">Unleash Power</h1>
    </Fade>
    <Fade direction="down">
      <h1 className="lg:text-6xl my-2 text-xl font-extrabold text-white">Top-Performance Bikes</h1>
    </Fade>
    <Fade direction="down">
      <p className="text-gray-200 my-2 lg:text-sm text-xs mt-6">Conquer the road with our top-performance motorcycles. Engineered for speed and precision, these bikes are built for those who crave adventure. Take control and feel the power beneath you.</p>
    </Fade>
    <Fade direction="up">
      <h1 className="lg:text-2xl text-xl my-2 font-semibold text-white">Phone: 123 456 786</h1>
    </Fade>
    <Fade direction="up">
      <Link to="#" className="relative inline-flex items-center justify-center lg:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-center lg:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Add To Cart</span>
      </Link>
    </Fade>
  </div>
</SwiperSlide>
        <SwiperSlide className="relative">
  <img className="lg:h-[700px] h-[500px] w-full opacity-60" src="https://www.slashgear.com/img/gallery/the-7-best-electric-motorcycles-on-the-market/intro-1669843867.jpg" alt="Headphone" />
  <div className="absolute top-1/2 left-[50%] lg:left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-left">
    <Fade direction="down">
      <h1 className="lg:text-4xl my-2 text-md font-bold text-white">Adventure Awaits</h1>
    </Fade>
    <Fade direction="down">
      <h1 className="lg:text-6xl my-2 text-xl font-extrabold text-white">Off-Road Dominance</h1>
    </Fade>
    <Fade direction="down">
      <p className="text-gray-200 my-2 lg:text-sm text-xs mt-6">Get ready to dominate any terrain with our rugged off-road motorcycles. Supreme Gadgets provides you with bikes that are tough, durable, and ready for any challenge. Blaze your trail today.</p>
    </Fade>
    <Fade direction="up">
      <h1 className="lg:text-2xl text-xl my-2 font-semibold text-white">Phone: 123 456 786</h1>
    </Fade>
    <Fade direction="up">
      <Link to="#" className="relative inline-flex items-center justify-center lg:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-center lg:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Add To Cart</span>
      </Link>
    </Fade>
  </div>
</SwiperSlide>
        <SwiperSlide className="relative">
  <img className="lg:h-[700px] h-[500px] w-full opacity-60" src="https://www.montway.com/app/uploads/2022/08/5-Advantages-of-Electric-Motorcycles_652_revised_final-1200x720.jpg" alt="Headphone" />
  <div className="absolute top-1/2 left-[50%] lg:left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-left">
    <Fade direction="down">
      <h1 className="lg:text-4xl my-2 text-md font-bold text-white">Luxury on Wheels</h1>
    </Fade>
    <Fade direction="down">
      <h1 className="lg:text-6xl my-2 text-xl font-extrabold text-white">Premium Motorcycles</h1>
    </Fade>
    <Fade direction="down">
      <p className="text-gray-200 my-2 lg:text-sm text-xs mt-6">Indulge in the luxury of our premium motorcycles. Designed for comfort and elegance, these bikes offer an unmatched riding experience. Elevate your ride with the best in class.</p>
    </Fade>
    <Fade direction="up">
      <h1 className="lg:text-2xl text-xl my-2 font-semibold text-white">Phone: 123 456 786</h1>
    </Fade>
    <Fade direction="up">
      <Link to="#" className="relative inline-flex items-center justify-center lg:justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-center lg:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Add To Cart</span>
      </Link>
    </Fade>
  </div>
</SwiperSlide>

        


      </Swiper>

    </div>
  );
};

export default Carousel;