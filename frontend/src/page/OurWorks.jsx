import React from 'react';
import tdrsaImage from '../assests/tdrsa.png';
import rotaryImage from '../assests/rotary.png';
import emsImage from '../assests/ems.jpeg';

const OurWorks = () => {
  return (
    <div className="p-8">
      
      {/* Thiruvallur District Roller Skating Association */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <img className="w-full h-80 object-cover md:h-full" src={tdrsaImage} alt="Thiruvallur District Roller Skating Association" />
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-serif font-semibold mb-6 text-gray-800">Thiruvallur District Roller Skating Association</h1>
          <p className="text-lg font-serif mb-4 text-gray-600 leading-relaxed">
            We developed a dynamic and interactive website for the Thiruvallur District Roller Skating Association, showcasing events, achievements, and engaging content for the community.
          </p>
          <p className="text-lg font-serif text-gray-600 leading-relaxed">
            The site features responsive design, event management, and integrated social media feeds, ensuring a seamless user experience across all devices.
          </p>
        </div>
      </div>

      {/* Rotary Club of Chennai Lakecity */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
  <div className="order-1 md:order-1 w-full md:w-1/2 p-8">
    <h1 className="text-4xl font-serif font-semibold mb-6 text-gray-800">Rotary Club of Chennai Lakecity</h1>
    <p className="text-lg font-serif mb-4 text-gray-600 leading-relaxed">
      Our team designed and developed a website for the Rotary Club of Chennai Lakecity, focusing on showcasing their projects, initiatives, and community impact.
    </p>
    <p className="text-lg font-serif text-gray-600 leading-relaxed">
      The website is optimized for performance and accessibility, ensuring a broad reach and easy navigation for all users.
    </p>
  </div>
  <div className="order-2 md:order-2 w-full md:w-1/2">
    <img className="w-full h-auto md:h-full object-cover rounded-lg shadow-lg" src={rotaryImage} alt="Rotary Club of Chennai Lakecity" />
  </div>
</div>


      {/* Employee Management System */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
  <div className="order-2 md:order-1 w-full md:w-1/2">
    <img className="w-full h-80 object-cover md:h-full" src={emsImage} alt="Employee Management System" />
  </div>
  <div className="order-1 md:order-2 w-full md:w-1/2 p-8">
    <h1 className="text-4xl font-serif font-semibold mb-6 text-gray-800">Employee Management System</h1>
    <p className="text-lg font-serif mb-4 text-gray-600 leading-relaxed">
      We developed a comprehensive Employee Management System, designed to streamline HR processes, including employee onboarding, attendance tracking, and performance evaluations.
    </p>
    <p className="text-lg font-serif text-gray-600 leading-relaxed">
      The system is equipped with advanced reporting features, secure data management, and user-friendly interfaces.
    </p>
  </div>
</div>

    </div>
  );
};

export default OurWorks;
