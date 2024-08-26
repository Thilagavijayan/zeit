import React from 'react';
import Landings from '../assests/landing.png';
import backgroundImage from '../assests/Group 84.png';
import './Landing.css'; // Make sure this CSS file contains necessary styles
import { Link } from 'react-router-dom';
import service from '../assests/service.jpg';

const Landing = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      
      {/* Banner Section */}
      <div className="relative mb-12">
        <img 
          src={service} 
          alt="Event" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold mb-4 text-center p-2 rounded-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
            Our Services
          </h1>
          <div className="bg-black bg-opacity-60 p-2 rounded-lg overflow-hidden w-11/12 md:w-10/12 mx-auto">
            <div className="text-white text-lg md:text-2xl font-bold animate-scroll whitespace-nowrap">
              🌟 Elevate Your Business with Our Expert Services | 🚀 Innovate with Cutting-Edge Web Solutions | Custom Web Development Crafted for Success.
            </div>
          </div>
        </div>
      </div>

      {/* Web Development Section */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-black bg-opacity-50 p-8 md:p-16 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-4">WEB DEVELOPMENT</h1>
          <h3 className="text-base md:text-xl text-white text-center w-full mb-6 max-w-4xl">
            Our web development service is tailored to meet the unique needs of your business, providing a seamless online presence. Our team of skilled developers leverages cutting-edge technologies to create responsive and user-friendly websites that captivate your audience. We prioritize functionality, ensuring that your website not only looks great but also performs flawlessly across various devices.
          </h3>
          <div className="flex justify-center">
            <button className="w-32 py-2 font-serif bg-white border border-gray-300 rounded shadow-xl hover:bg-gray-100 transition duration-300">
              <Link to="/OurWorks" className="text-gray-800">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
