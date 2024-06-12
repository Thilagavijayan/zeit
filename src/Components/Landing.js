import React from 'react'
import Landings from '../assests/landing.png'
import backgroundImage from '../assests/Group 84.png'
import './Landing.css'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='bg-image'>
        
          <div class="" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <h1 className='pt-12 mb-8 font-serif text-3xl font-semibold text-center'>WEB DEVELOPMENT</h1>
            <h3 className='w-1/2 mb-6 ml-24 mr-48 font-serif text-xl '>Our web development service is tailored to meet the unique needs of your business, providing a seamless online presence. Our team of skilled developers leverages cutting-edge technologies to create responsive and user-friendly websites that captivate your audience. We prioritize functionality, ensuring that your website not only looks great but also performs flawlessly across various devices.</h3>
            <button className='w-32 mb-12 font-serif bg-white border border-gray-300 rounded shadow-xl h-7 center ml-96'><Link to="/">View</Link></button>
            </div>
       



    </div>
  )
}

export default Landing