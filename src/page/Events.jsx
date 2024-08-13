import React, { useState } from 'react';
import sem1 from '../assests/sem1.png';
import sem2 from '../assests/sem2.png';
import rgn from '../assests/rgn.jpg';

const Events = () => {
  const [filter, setFilter] = useState(''); // State to store the filter input

  const handleInputChange = (e) => {
    setFilter(e.target.value.toLowerCase()); // Update the filter state on input change
  };

  const isSeminarVisible = filter === '' || filter.includes('seminar');
  const isRecognitionVisible = filter === '' || filter.includes('recognition');

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif font-semibold mb-12 text-gray-800 text-center">Our Events</h1>

      {/* Filter Input */}
      <div className="mb-12 text-center">
        <input
          type="text"
          placeholder="Type to filter it"
          value={filter}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-20px  md:w-1/2"
        />
      </div>

      {/* Seminars Section */}
      {isSeminarVisible && (
        <div className='mb-24'>
          <h2 className="text-3xl font-serif font-semibold mb-8 text-gray-800">Seminars</h2>
          
          {/* Seminar 1 */}
          <div className='mb-16'>
            <div className='flex flex-wrap md:flex-nowrap items-start md:space-x-8'>
              <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                <img 
                  src={sem1}
                  alt="Seminar 1 Image" 
                  className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300' 
                />
              </div>
              <div className='w-full md:w-2/3'>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-2xl font-serif font-semibold mb-4 text-gray-800'>Initiate with School Staff</h3>
                  <p className='text-lg font-serif text-gray-600'>
                    A group of school staff gathered to discuss the importance of learning methods and the awareness of the skill gap at Schools.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seminar 2 */}
          <div className='mb-16'>
            <div className='flex flex-wrap md:flex-nowrap items-start md:space-x-8'>
              <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                <img 
                  src={sem2} 
                  alt="Seminar 2 Image" 
                  className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300' 
                />
              </div>
              <div className='w-full md:w-2/3'>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-2xl font-serif font-semibold mb-4 text-gray-800'>Empowering Students with Tech</h3>
                  <p className='text-lg font-serif text-gray-600'>
                    We empower students with the importance of technology, teaching Python basics, fostering innovation, and preparing them for future opportunities at  Schools.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recognition Section */}
      {isRecognitionVisible && (
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-8 text-gray-800">Recognition</h2>
          <div className='flex flex-wrap md:flex-nowrap items-start md:space-x-8'>
            <div className='w-full md:w-1/3 mb-4 md:mb-0'>
              <img 
                src={rgn}
                alt="Recognition Image" 
                className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300' 
              />
            </div>
            <div className='w-full md:w-2/3'>
              <div className='bg-white rounded-lg shadow-lg p-6'>
                <h3 className='text-2xl font-serif font-semibold mb-4 text-gray-800'>Efforts</h3>
                <p className='text-lg font-serif text-gray-600'>
                  Recognized for innovative problem-solving, securing our debut project, marking a pivotal milestone in our journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
