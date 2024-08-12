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
        <div className='ml-5 font-serif'>Prioritizing user experience is key to successful software development. Understanding user needs and preferences ensures that the software is intuitive, user-friendly, and aligns with the end-users.</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>In a fast-evolving digital landscape, staying updated with the latest trends and technologies is crucial.By embracing innovations, we ensure that website not only meets but exceeds industry standards.

</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Our commitment to a mobile-first design ensures that your website delivers a stunning visual experience and  performance on all devices Whether users are on smartphones, tablets, or desktops. </div></div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>Navigating a website should be effortless, and we emphasize intuitive navigation. Our design team meticulously plans the site structure to ensure that visitors can easily find what they are looking for.</div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='container flex items-center justify-between p-4 mx-auto mt-12 text-sm bg-white border border-gray-300 shadow-xl'>
        <img className='w-20' src={plane} alt=''/>
        <div className='ml-5 font-serif'>A seamless user interface is key to capturing and retaining visitor interest. Our designers focus on creating interfaces that are not only aesthetically pleasing but also highly functional. 
</div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
        

    </div>
  )
}

export default Slide