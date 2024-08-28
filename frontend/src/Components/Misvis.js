import React from 'react';
import misvis from '../assests/misvis.png';

const Misvis = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row mt-20 items-center">
        <h1 className="text-xl font-semibold w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          Best solutions for your problems
        </h1>
        <div className="hidden md:block md:h-20 md:ml-12 border-l-2 border-black"></div>
        <h3 className="w-full md:w-2/3 text-center md:text-left mt-4 md:mt-0 md:ml-8">
          Continuous learning and adaptability are key to addressing any challenge; embrace curiosity and seek diverse perspectives for innovative solutions. Our commitment to delivering the best solutions remains unwavering. By leveraging cutting-edge technology and a wealth of knowledge, we strive to address your needs comprehensively. Whether you seek guidance on complex issues, clarification on diverse topics, or creative ideas, our goal is to be your trusted source.
        </h3>
      </div>
      <img
        className="w-full mt-20 md:pl-28 md:pr-28 object-cover"
        src={misvis}
        alt="Mission and Vision"
      />
    </div>
  );
}

export default Misvis;
