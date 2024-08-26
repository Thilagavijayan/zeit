import React from 'react';
import web from '../assests/web.png';

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-12 lg:mt-24 lg:ml-20'>
      <div className='lg:w-1/2 px-4 lg:px-0'>
        <h1 className='mb-5 font-serif text-2xl lg:text-4xl'>
          Build a Modern Day Website with Higher Conversions
        </h1>
        {/* Image next to h1 in mobile view */}
        <div className='flex justify-center lg:hidden mb-5'>
          <img className='w-64 h-45' src={web} alt='web' />
        </div>
        <h3 className='text-base lg:text-xl lato'>
          Embracing the latest trends and technologies, we ensure that your website is at the forefront of innovation. Our mobile-first approach guarantees that your site looks stunning and performs flawlessly across all devices, providing an unmatched user experience. Intuitive navigation and user-friendly interfaces are key to driving engagement, and our designers meticulously create seamless interactions that captivate visitors from the moment they land on your website.
        </h3>
        <h3 className='mt-3 text-base lg:text-xl lato'>
          Each element is strategically placed to guide users effortlessly through their journey and encourage conversions. Beyond aesthetics, we emphasize the importance of functionality and performance. Our team rigorously tests each website, ensuring optimal loading times and smooth functionality. By combining form and function, we create a seamless blend of artistry and practicality.
        </h3>
      </div>
      {/* Image on the right side in desktop view */}
      <div className='lg:w-1/2 flex justify-center lg:justify-right mt-12 mb-8 lg:mb-0'>
        <img className='w-64 h-40 lg:w-100 lg:h-72 hidden lg:block' src={web} alt='web' />
      </div>
    </div>
  );
};

export default About;

