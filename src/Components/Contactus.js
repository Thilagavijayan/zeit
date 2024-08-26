import React from 'react';
import contact from '../assests/contact.png';
import insta from '../assests/instagram logo.png';
import linked from '../assests/linkedin logo.png';
import twitter from '../assests/twitter icon.png';
import { Link } from 'react-router-dom';

const Contactus = () => {
  return (
    <div className='p-8'>
      <h1 className='text-6xl font-serif font-medium mb-12'>NEWS</h1>

      {/* News Section */}
      <div className='relative overflow-hidden max-h-[500px] mb-16'>
        <div 
          className='slider flex gap-8' 
          style={{ 
            animation: 'slide 15s linear infinite' 
          }}
        >
          {/* News Card 1 */}
          <div 
            className='news-card bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/3'
            style={{ 
              animationPlayState: 'running' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            <p className='mt-4 text-gray-600'>
              Visit a school for students encouragement and made an idea to take a decision.
            </p>
          </div>

          {/* News Card 2 */}
          <div 
            className='news-card bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/3'
            style={{ 
              animationPlayState: 'running' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            <p className='mt-4 text-gray-600'>
              Our commitment to empowering students with technology is more than just about teaching them to use tools it is about preparing them to be innovators, problem-solvers, and leaders in a tech-driven world.
            </p>
          </div>

          {/* News Card 3 */}
          <div 
            className='news-card bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex-shrink-0 w-full md:w-1/3'
            style={{ 
              animationPlayState: 'running' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            <p className='mt-4 text-gray-600'>
              We are partnered with leading tech companies to provide students with real-world exposure. Access to cutting-edge software, and opportunities for internships.
            </p>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className='flex items-center justify-between w-full p-4 bg-white border border-gray-300 shadow-xl mb-8 flex-col md:flex-row'>
        <img className='w-48 mb-4 md:mb-0' src={contact} alt="Contact" />
        <div className='text-3xl font-serif mb-4 md:mb-0 md:ml-5 text-center'>
          We are excited to discuss your software development needs!!!
        </div>
        <Link to="/contact">
          <div className='px-5 py-3 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 transition-colors duration-300 text-center'>
            Contact Us
          </div>
        </Link>
      </div>

      {/* Social Media Links */}
      <div className='flex items-center mt-4 flex-wrap justify-center md:justify-start'>
        <h1 className='text-5xl font-serif font-medium mr-8 mb-4 md:mb-0'>CONNECT:</h1>
        <a href="https://www.instagram.com/zeit_tech/" target="_blank" rel="noopener noreferrer">
          <img className='w-full h-9 mb-4' src={insta} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/zeittechgroup" target="_blank" rel="noopener noreferrer">
          <img className='w-full h-9 mb-4' src={linked} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className='w-full h-8 mb-4' src={twitter} alt="Twitter" />
        </a>
      </div>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

export default Contactus;
