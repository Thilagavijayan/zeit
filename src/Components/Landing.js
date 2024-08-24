import React from 'react'
import Landings from '../assests/landing.png'
import backgroundImage from '../assests/Group 84.png'
import './Landing.css'
import { Link } from 'react-router-dom';
import service from '../assests/service.jpg';

const Landing = () => {
    return (
      <div className="p-8 max-w-7xl mx-auto relative">
      
        <div className="relative mb-12">
          <img 
            src={service} 
            alt="Event" 
            className="w-full h-64 object-cover rounded-lg shadow-lg" 
            style={{
              filter: 'none', 
              imageRendering: 'auto', 
            }} 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-serif font-extrabold mb-4 text-center p-2 rounded-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
    Our Services
</h1>

            <div className="mt-8"></div>
          <div
            className="bg-black bg-opacity-60 p-2 rounded-lg overflow-hidden"
            style={{
              width: '85%',
              height: '60px',
              position: 'relative',
              bottom: '15px',
            }}
          >
            <div
              className="text-white text-2xl font-bold animate-scroll whitespace-nowrap"
              style={{ display: 'inline-block' }}
            >
                🌟 Elevate Your Business with Our Expert Services | 🚀 Innovate with Cutting-Edge Web Solutions |  Custom Web Development Crafted for Success.
          </div></div>
        </div>
      </div>

        <div className='bg-image'>
          <div style={{ backgroundImage: `url(${backgroundImage})`}}>
            <h1 className='pt-12 mb-8 font-serif text-3xl font-semibold text-center'>WEB DEVELOPMENT</h1>
            <h3 className='w-1/2 mb-6 ml-24 mr-48 font-serif text-xl'>
              Our web development service is tailored to meet the unique needs of your business, providing a seamless online presence. Our team of skilled developers leverages cutting-edge technologies to create responsive and user-friendly websites that captivate your audience. We prioritize functionality, ensuring that your website not only looks great but also performs flawlessly across various devices.
            </h3>
            <button className='w-32 mb-12 font-serif bg-white border border-gray-300 rounded shadow-xl h-7 center ml-96'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>
    )
}

export default Landing;
