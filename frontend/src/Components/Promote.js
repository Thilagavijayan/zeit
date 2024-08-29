import React from 'react';
import team from '../assests/s4.png';
import quality from '../assests/s3.png';
import trust from '../assests/s2.png';
import client from '../assests/s1.png';

const Promote = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24">
      <h1 className='mt-16 mb-20 font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-center'>
        Why you choose us for software development
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start">
          <img className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-6' src={team} alt="Dedicated Teams" />
          <div className="md:flex-1">
            <h1 className='font-serif text-xl md:text-2xl font-medium text-purple-700'>Dedicated Teams</h1>
            <h3 className='mt-5'>
              Dedicated teams excel through collaboration, pooling diverse expertise for efficient problem-solving. Their unified focus promotes seamless communication, fostering innovation and achieving shared goals.
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start">
          <img className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-6' src={quality} alt="Focus on Quality" />
          <div className="md:flex-1">
            <h1 className='font-serif text-xl md:text-2xl font-medium text-purple-700'>Focus on Quality</h1>
            <h3 className='mt-5'>
              Our dedicated team of professionals adheres to industry best practices, employing rigorous testing and validation processes to guarantee the reliability, functionality, and security of our solutions.
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start">
          <img className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-6' src={trust} alt="Trust" />
          <div className="md:flex-1">
            <h1 className='font-serif text-xl md:text-2xl font-medium text-purple-700'>Trust</h1>
            <h3 className='mt-5'>
              From our initial interactions to the successful completion of projects, we prioritize integrity and accountability. Our team is dedicated to fostering trust by actively listening to our clients, understanding their unique needs, and providing transparent communication at every stage.
            </h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start">
          <img className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-6' src={client} alt="Client-Centric Approach" />
          <div className="md:flex-1">
            <h1 className='font-serif text-xl md:text-2xl font-medium text-purple-700'>Client-Centric Approach</h1>
            <h3 className='mt-5'>
              Through open and transparent communication, we actively involve clients in the decision-making process, ensuring their vision is not just understood but intricately woven into every aspect of the project.
            </h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Promote;
