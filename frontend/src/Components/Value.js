import React from 'react';
import women from '../assests/women.png';
import child from '../assests/child.png';
import consult from '../assests/consult.png';

const Value = () => {
  return (
    <div className="px-4 py-12">
      <h1 className="font-serif text-6xl text-center mb-4">We value your needs</h1>
      <h3 className="font-serif font-medium text-center text-gray-600 mb-7">
        Your needs are at the core of our priorities, and we are dedicated to providing tailored solutions
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <div className="relative overflow-hidden cursor-pointer group">
          <img className="object-cover w-full h-full" src={women} alt="Women empowerment" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-9 translate-y-[100%] group-hover:translate-y-0 transition-transform bg-black bg-opacity-50">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">Women Empowerment</h1>
          </div>
        </div>

        <div className="relative overflow-hidden cursor-pointer group">
          <img className="object-cover w-full h-full" src={child} alt="Children Education" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-9 translate-y-[100%] group-hover:translate-y-0 transition-transform bg-black bg-opacity-50">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">Children Education</h1>
          </div>
        </div>

        <div className="relative overflow-hidden cursor-pointer group">
          <img className="object-cover w-full h-full" src={consult} alt="Consultation" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-9 translate-y-[100%] group-hover:translate-y-0 transition-transform bg-black bg-opacity-50">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">Consultation</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
