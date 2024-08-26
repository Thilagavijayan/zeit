import React from 'react';
import { useNavigate } from 'react-router-dom';
import front from '../assests/Group 76.png';
import back from '../assests/Group 77.png';
import UI from '../assests/Group 83.png';
import res from '../assests/Group 78.png';
import custom from '../assests/Group 79.png';
import content from '../assests/Group 80.png';
import api from '../assests/Group 81.png';

const Serves = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-20">
      {/* Frontend Development Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={front} alt="Frontend Development" className="w-full h-auto max-w-sm md:max-w-md lg:ml-10 sm:ml-0 rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 order-1 md:order-2 text-center md:text-left md:ml-8 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">FRONTEND DEVELOPMENT</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Your frontend service is dedicated to crafting visually engaging and intuitive user interfaces that enhance the overall user experience.
          </p>
          <p className="font-serif text-lg md:text-xl mb-6">
            Our team is adept at translating your brand identity into compelling visuals, ensuring a cohesive and memorable online presence.
          </p>
        </div>
      </div>

      {/* Backend Development Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row-reverse items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={back} alt="Backend Development" className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-right md:mr-8 order-1 md:order-2 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">BACKEND DEVELOPMENT</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Our backend service focuses on building the robust foundation that powers your website or application. We specialize in creating efficient and scalable server-side architectures.
          </p>
        </div>
      </div>

      {/* UI/UX Design Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={UI} alt="UI/UX Design" className="w-full h-auto max-w-sm md:max-w-md lg:ml-10 sm:ml-0 rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-left md:ml-8 order-1 md:order-2 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">UI/UX DESIGN</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Transforming your digital presence with expert UI/UX design services. From wireframing to prototyping, we craft user-centric interfaces that captivate and convert.
          </p>
        </div>
      </div>

      {/* Responsiveness Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row-reverse items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={res} alt="Responsiveness" className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-right md:mr-8 order-1 md:order-2 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">RESPONSIVENESS</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Our dedication to responsiveness ensures that your website adapts seamlessly to various screen sizes and devices, providing an optimal user experience.
          </p>
        </div>
      </div>

      {/* Customized Sites Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={custom} alt="Customized Sites" className="w-full h-auto max-w-sm md:max-w-md lg:ml-10 sm:ml-0 rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-left md:ml-8 order-1 md:order-2 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">CUSTOMIZED SITES</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Our customized sites are meticulously designed to reflect the unique identity and goals of your business. We go beyond one-size-fits-all solutions.
          </p>
        </div>
      </div>

      {/* Content Strategy Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row-reverse items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={content} alt="Content Strategy" className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-right md:mr-8 order-1 md:order-2 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">CONTENT STRATEGY</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Our content strategy is meticulously crafted to align with your business goals and resonate with your target audience.
          </p>
        </div>
      </div>

      {/* API Integration Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mb-24">
        <div className="flex-1 order-2 md:order-1 md:w-1/2 mb-6 md:mb-0">
          <img src={api} alt="API Integration" className="w-full h-auto max-w-sm md:max-w-md lg:ml-10 sm:ml-0 rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 text-center md:text-left md:ml-8 order-1 md:order-2 p-8">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">API INTEGRATION</h1>
          <p className="font-serif text-lg md:text-xl mb-6">
            Our API integration services ensure seamless connectivity between your website and various third-party services.
          </p>
          <p className="font-serif text-lg md:text-xl mb-6">
            From payment gateways to social media integrations, our team ensures that every aspect of your API integration is handled with precision and expertise.
          </p>
        </div>
      </div>

      {/* View Projects Button */}
      <div className="flex justify-center py-4">
        <button
          onClick={() => navigate('/OurWorks')}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-serif border border-gray-300 rounded shadow-lg px-20 py-3 transition-transform transform hover:scale-105">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default Serves;
