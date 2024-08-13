import React from 'react';
import tdrsaImage from '../assests/tdrsa.png';
import rotaryImage from '../assests/rotary.png';
import emsImage from '../assests/ems.jpeg';

const OurWorks = () => {
  return (
    <div className="p-8">
       <h1 className="text-4xl font-serif font-semibold mb-12 text-gray-700 text-center">OUR WORKS</h1>
      {/* Thiruvallur District Roller Skating Association */}
      <div className='flex flex-wrap items-center mb-24'>
        <div className='w-full md:w-1/2'>
          <img className='w-3/4 h-auto mt-8 ml-8 rounded-lg shadow-lg' src={tdrsaImage} alt='Thiruvallur District Roller Skating Association'/>
        </div>
        <div className='w-full md:w-1/2 px-8'>
          <h1 className='mt-8 text-4xl font-serif font-semibold mb-6 text-gray-800'>Thiruvallur District Roller Skating Association</h1>
          <p className='text-lg font-serif mb-4 text-gray-600 leading-relaxed'>
            We developed a dynamic and interactive website for the Thiruvallur District Roller Skating Association, showcasing events, achievements, and engaging content for the community.
          </p>
          <p className='text-lg font-serif text-gray-600 leading-relaxed'>
            The site features responsive design, event management, and integrated social media feeds, ensuring a seamless user experience across all devices.
          </p>
        </div>
      </div>

      {/* Rotary Club of Chennai Lakecity */}
      <div className='flex flex-wrap items-center mb-24'>
        <div className='w-full md:w-1/2 px-8 order-last md:order-first'>
          <h1 className='mt-8 text-4xl font-serif font-semibold mb-6 text-gray-800'>Rotary Club of Chennai Lakecity</h1>
          <p className='text-lg font-serif mb-4 text-gray-600 leading-relaxed'>
            Our team designed and developed a website for the Rotary Club of Chennai Lakecity, focusing on showcasing their projects, initiatives, and community impact.
          </p>
          <p className='text-lg font-serif text-gray-600 leading-relaxed'>
            The website is optimized for performance and accessibility, ensuring a broad reach and easy navigation for all users.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img className='w-3/4 h-auto mt-8 mr-8 rounded-lg shadow-lg' src={rotaryImage} alt='Rotary Club of Chennai Lakecity'/>
        </div>
      </div>

      {/* Employee Management System */}
      <div className='flex flex-wrap items-center'>
        <div className='w-full md:w-1/2'>
          <img className='w-3/4 h-auto mt-8 ml-8 rounded-lg shadow-lg' src={emsImage} alt='Employee Management System'/>
        </div>
        <div className='w-full md:w-1/2 px-8'>
          <h1 className='mt-8 text-4xl font-serif font-semibold mb-6 text-gray-800'>Employee Management System</h1>
          <p className='text-lg font-serif mb-4 text-gray-600 leading-relaxed'>
            We developed a comprehensive Employee Management System, designed to streamline HR processes, including employee onboarding, attendance tracking, and performance evaluations.
          </p>
          <p className='text-lg font-serif text-gray-600 leading-relaxed'>
            The system is equipped with advanced reporting features, secure data management, and user-friendly interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
