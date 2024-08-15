
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination,Autoplay } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide className='relative'><img className='md:h-[700px] h-[500px] w-full opacity-60' src="https://powersports.honda.com/-/media/products/segment/street/sport/category-mp/hero/desktop/2024/sport-segment-hero-01-2400x1350.jpg" alt="Headphone" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Fade direction='down'><h1 className='md:text-5xl text-xl font-bold text-white text-center'>Unleash the Power of Innovation <br /> with Supreme Gadgets</h1></Fade>
        <Fade direction='up'><p className='text-gray-200 md:text-sm text-xs text-center mt-6'>Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p></Fade>
        </div>
        </SwiperSlide>
        <SwiperSlide className='relative'><img className='md:h-[700px] h-[500px] w-full opacity-70' src="https://t3.ftcdn.net/jpg/05/34/63/60/360_F_534636028_ZPuCsi4guXQOZYHtqfi8QbH5jAhN5oRg.jpg" alt="Headphone" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Fade direction='down'><h1 className='md:text-5xl text-xl font-bold text-white text-center'>Unleash the Power of Innovation <br /> with Supreme Gadgets</h1></Fade>
        <Fade direction='up'><p className='text-gray-200 md:text-sm text-xs text-center mt-6'>Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p></Fade>
        </div>
        </SwiperSlide>
        
        
      </Swiper>
      
    </div>
  );
};

export default Carousel;