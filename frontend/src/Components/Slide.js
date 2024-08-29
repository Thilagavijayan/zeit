import React from 'react';
import plane from '../assests/paper-plane.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay'; // Import the autoplay styles
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const Slide = () => {
  return (
    <div className="container mx-auto px-4">
      <Swiper 
        slidesPerView={1} // Default to 1 slide per view on mobile
        spaceBetween={20} // Space between slides
        freeMode={true}
        autoplay={{
          delay: 3000, // Slide will change every 3 seconds
          disableOnInteraction: false, // Autoplay won't stop when user interacts with the slide
        }}
        loop={true} // Enable continuous loop
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay to the modules
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className='card flex items-center justify-between p-4 text-sm bg-white border border-gray-300 shadow-lg rounded-lg'>
            <img className='w-20' src={plane} alt='plane' />
            <div className='ml-5 font-serif'>
              Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card flex items-center justify-between p-4 text-sm bg-white border border-gray-300 shadow-lg rounded-lg'>
            <img className='w-20' src={plane} alt='plane' />
            <div className='ml-5 font-serif'>
              In a fast-evolving digital landscape, staying updated with the latest trends and technologies is crucial. By embracing innovations, we ensure that websites not only meet but exceed industry standards.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card flex items-center justify-between p-4 text-sm bg-white border border-gray-300 shadow-lg rounded-lg'>
            <img className='w-20' src={plane} alt='plane' />
            <div className='ml-5 font-serif'>
              Our commitment to a mobile-first approach ensures that your website offers a seamless experience across all devices, enhancing accessibility and user engagement.
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
}

export default Slide;
