import React from 'react'
import plane from '../assests/paper-plane.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
/*import { Autoplay, Pagination, Navigation } from 'swiper/modules';*/
import { FreeMode, Pagination} from 'swiper/modules';


const Slide = () => {
  return (
    <div>
        <>
      <Swiper 
        slidesPerView={3}
        spaceBetween={70}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users' expectations, resulting in higher adoption rates.</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users' expectations, resulting in higher adoption rates.</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users' expectations, resulting in higher adoption rates.</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users' expectations, resulting in higher adoption rates.</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users' expectations, resulting in higher adoption rates.</div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
        

    </div>
  )
}

export default Slide