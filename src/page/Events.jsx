import React, { useState } from 'react';
import sem1 from '../assests/sem1.png';
import sem2 from '../assests/sem2.png';
import rgn from '../assests/rgn.jpg';
import eventImage from '../assests/event.jpg'; 
import '../index.css';

const Events = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilterVisibility = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevSelectedFilters) =>
      checked ? [...prevSelectedFilters, name] : prevSelectedFilters.filter((filter) => filter !== name)
    );
  };

  const isSeminarVisible = selectedFilters.length === 0 || selectedFilters.includes('seminar');
  const isRecognitionVisible = selectedFilters.length === 0 || selectedFilters.includes('recognition');

  return (
    <div className="p-4 md:p-8 lg:p-16 max-w-7xl mx-auto relative">
      
      {/* Event Banner */}
      <div className={`relative mb-12 ${showFilter ? 'mt-16' : ''}`}>
        <img src={eventImage} alt="Event" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold mb-4 text-center p-2 rounded-lg" style={{ color: 'white' }}>
            Our Events
          </h1>
          <div className="bg-black bg-opacity-60 p-2 rounded-lg overflow-hidden" style={{ width: '85%', height: '60px', position: 'relative', bottom: '15px' }}>
            <div className="text-white text-2xl font-bold animate-scroll whitespace-nowrap" style={{ display: 'inline-block' }}>
              🚀 Explore our latest events: Web Development Seminar, Empowering Students with Tech, and more!
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-gray-900">Seminars</h2>
          <button onClick={toggleFilterVisibility} className="px-4 py-2 bg-zinc-500 text-white rounded-lg shadow-md mb-7">
            {showFilter ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {showFilter && (
          <div className="bg-white shadow-lg p-4 rounded-lg mb-8">
            <div className="flex flex-col items-start space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="seminar"
                  checked={selectedFilters.includes('seminar')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox text-blue-600 h-6 w-6"
                />
                <span className="ml-2 text-gray-800 text-lg">Seminars</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="recognition"
                  checked={selectedFilters.includes('recognition')}
                  onChange={handleCheckboxChange}
                  className="form-checkbox text-blue-600 h-6 w-6"
                />
                <span className="ml-2 text-gray-800 text-lg">Recognition</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Seminar Section */}
      {isSeminarVisible && (
        <div className='mb-24'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
            <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col'>
              <img 
                src={sem1} 
                alt="Seminar 1 pic" 
                className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 mb-4' 
              />
              <h3 className='text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-800'>Initiate with School Staff</h3>
              <p className='text-lg font-serif text-gray-700'>
                In Sivanthi Adithanar Girls HR Sec School, a team of school administrators and educators convened to engage in an in-depth discussion on the vital role that diverse learning methodologies play in enhancing student outcomes. The conversation also centered on the growing recognition of skill gaps among students, emphasizing the need for schools to adopt more targeted and innovative approaches to bridge these gaps and better prepare students for future challenges.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col'>
              <img 
                src={sem2} 
                alt="Seminar 2 pic" 
                className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 mb-4' 
              />
              <h3 className='text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-800'>Empowering Students with Tech</h3>
              <p className='text-lg font-serif text-gray-700'>
                We are committed to empowering students by emphasizing the critical importance of technology in today's world. We introduce them to the fundamentals of Python programming, which serves as a gateway to understanding more complex concepts in computer science. By fostering a culture of innovation, we encourage students to think creatively and approach problems with a solution-oriented mindset.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Recognition Section */}
      {isRecognitionVisible && (
        <div className='mb-24'>
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-gray-900">Recognition</h2>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col'>
              <img 
                src={rgn} 
                alt="Recognition Image" 
                className='rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 mb-4' 
              />
              <h3 className='text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-800'>Efforts</h3>
              <p className='text-lg font-serif text-gray-700'>
                We emerged victorious at Star Hack Era 2023, where we demonstrated exceptional resilience and technical prowess in a highly competitive environment. This achievement not only highlighted our capabilities in the tech battlefield but also caught the attention of Cognizant employees, who recognized our innovative approach to problem-solving. As a result, we secured our debut project, marking a significant and pivotal milestone in our journey, setting the stage for future successes and growth.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
