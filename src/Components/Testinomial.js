import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';  // Import Autoplay module
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

import test1 from '../assests/test1.jpeg';
import test2 from '../assests/test2.jpeg';
import test3 from '../assests/test3.jpeg';
import test4 from '../assests/test4.jpeg';
import test5 from '../assests/test5.jpeg';

const Testinomial = () => {
  return (
    <div className='mb-12 mt-10'>
      <h1 className='mb-4 font-serif text-6xl font-medium text-center'>
        What People Say About Us
      </h1>
      <h3 className='mb-6 font-serif text-xl text-center text-gray-600'>
        This part of testimonials helps to know about our process and services which are delivered that speaks for itself
      </h3>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500, // Adjust the delay as needed
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              autoplay: {
                delay: 2500, // Delay in mobile view
                disableOnInteraction: false,
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              autoplay: false, // Disable autoplay for larger screens
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              autoplay: false, // Disable autoplay for larger screens
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 transform transition-transform duration-500 hover:scale-105">
              <blockquote className="mt-14">
                <p className="text-lg font-semibold text-gray-900">
                  “Our experience with this company has been fantastic! The team is dedicated and their attention to detail is unmatched.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-sm font-medium text-gray-900">
                <img className="h-16 w-16 rounded-full" src={test1} alt="User 1" />
                <div>
                  <p>John Doe</p>
                  <p className="text-gray-600">CEO, Example Corp</p>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 transform transition-transform duration-500 hover:scale-105">
              <blockquote className="mt-14">
                <p className="text-lg font-semibold text-gray-900">
                  “A truly remarkable service! Their attention to customer needs is exceptional, and their deliverables are always on point.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-sm font-medium text-gray-900">
                <img className="h-16 w-16 rounded-full" src={test2} alt="User 2" />
                <div>
                  <p>Jane Smith</p>
                  <p className="text-gray-600">Marketing Director, Sample Ltd.</p>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 transform transition-transform duration-500 hover:scale-105">
              <blockquote className="mt-14">
                <p className="text-lg font-semibold text-gray-900">
                  “Outstanding support and execution. Their team was highly responsive and delivered beyond our expectations.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-sm font-medium text-gray-900">
                <img className="h-16 w-16 rounded-full" src={test4} alt="User 3" />
                <div>
                  <p>Vanya</p>
                  <p className="text-gray-600">Product Manager, Tech Innovators</p>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testinomial;
