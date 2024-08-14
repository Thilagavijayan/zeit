import React, { useState } from 'react';
import sem1 from '../assests/sem1.png';
import sem2 from '../assests/sem2.png';
import rgn from '../assests/rgn.jpg';

const Events = () => {
  const [filter, setFilter] = useState(''); 

  const handleInputChange = (e) => {
    setFilter(e.target.value.toLowerCase()); 
  };

  const isSeminarVisible = filter === '' || filter.includes('seminar');
  const isRecognitionVisible = filter === '' || filter.includes('recognition');

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif font-semibold mb-12 text-gray-800 text-center">Our Events</h1>

      
      <div className="mb-12 text-center">
        <input
          type="text"
          placeholder="Type to filter it"
          value={filter}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-20px  md:w-1/2"
        />
      </div>

    
      {isSeminarVisible && (
        <div className='mb-24'>
          <h2 className="text-3xl font-serif font-semibold mb-8 text-gray-800">Seminars</h2>
          
        
          <div className='mb-16'>
            <div className='flex flex-wrap md:flex-nowrap items-start md:space-x-8'>
              <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                <img 
                  src={sem1}
                  alt="Seminar 1 pic" 
                  className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300' 
                />
              </div>
              <div className='w-full md:w-2/3'>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-2xl font-serif font-semibold mb-4 text-gray-800'>Initiate with School Staff</h3>
                  <p className='text-lg font-serif text-gray-600'>
                   
                  In sivanthi adithanar girls hr sec school a team of school administrators and educators convened to engage in an in-depth discussion on the vital role that diverse learning methodologies play in enhancing student outcomes. The conversation also centered on the growing recognition of skill gaps among students, emphasizing the need for schools to adopt more targeted and innovative approaches to bridge these gaps and better prepare students for future challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        
          <div className='mb-16'>
            <div className='flex flex-wrap md:flex-nowrap items-start md:space-x-8'>
              <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                <img 
                  src={sem2} 
                  alt="Seminar 2 pic" 
                  className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300' 
                />
              </div>
              <div className='w-full md:w-2/3'>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-2xl font-serif font-semibold mb-4 text-gray-800'>Empowering Students with Tech</h3>
                  <p className='text-lg font-serif text-gray-600'>
                  We are committed to empowering students by emphasizing the critical importance of technology in today's world. We introduce them to the fundamentals of Python programming, which serves as a gateway to understanding more complex concepts in computer science. By fostering a culture of innovation, we encourage students to think creatively and approach problems with a solution-oriented mindset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     
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
                We emerged victorious at Star Hack Era 2023, where we demonstrated exceptional resilience and technical prowess in a highly competitive environment. This achievement not only highlighted our capabilities in the tech battlefield but also caught the attention of Cognizant employees, who recognized our innovative approach to problem-solving. As a result, we secured our debut project, marking a significant and pivotal milestone in our journey, setting the stage for future successes and growth.
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
