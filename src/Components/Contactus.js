import React from 'react'
import contact from '../assests/contact.png'
import insta from '../assests/instagram logo.png'
import linked from '../assests/linkedin logo.png'
import twitter from '../assests/twitter icon.png'
import { Link } from 'react-router-dom';

const Contactus = () => {
  return (
    <div className='p-8'>
      {/* News Section with Professional Card Layout */}
      <h1 className='text-6xl font-serif font-medium mb-12'>NEWS</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        
        {/* News Card 1 */}
        <div className='bg-white border border-gray-300 shadow-lg rounded-lg p-6'>
         
          <p className='mt-4 text-gray-600'>Visit a school for students encouragement and made an idea to take a decision. </p>
        </div>

        {/* News Card 2 */}
        <div className='bg-white border border-gray-300 shadow-lg rounded-lg p-6'>
         
          <p className='mt-4 text-gray-600'>Our commitment to empowering students with technology is more than just about teaching them to use tools it is about preparing them to be innovators, problem-solvers, and leaders in a tech-driven world. </p>
        </div>

        {/* News Card 3 */}
        <div className='bg-white border border-gray-300 shadow-lg rounded-lg p-6'>
          
          <p className='mt-4 text-gray-600'>We are partnered with leading tech companies to provide students with real-world exposure.Access to cutting-edge software, and opportunities for internships.</p>
        </div>

      </div>

      {/* Contact Section */}
      <div className='flex items-center justify-between w-full p-4 bg-white border border-gray-300 shadow-xl mb-8'>
        <img className='w-48' src={contact} alt="Contact" />
        <div className='ml-5 text-3xl font-serif'>
          We are excited to discuss your software development needs!!!
        </div>
        <Link to="/contact">
          <div className='px-5 py-3 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 transition-colors duration-300'>
            Contact Us
          </div>
        </Link>
      </div>

      {/* Connect Section */}
      <div className='flex items-center space-x-6'>
        <h1 className='text-5xl font-serif font-medium mr-8'>CONNECT:</h1>
        <img className='h-12' src={insta} alt="Instagram" />
        <img className='h-12' src={linked} alt="LinkedIn" />
        <img className='h-12' src={twitter} alt="Twitter" />
      </div>
      
    </div>
  )
}

export default Contactus
