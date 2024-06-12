import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className='h-32 bg-purple-200'>
     <div className='flex ml-80'>
     
      <p className='font-serif ml-96 mt-7'><Link to="/">Home</Link></p>
      <p className='ml-4 font-serif mt-7'><Link to="/service">Services</Link></p>
     </div>
     <div className='mt-12 ml-72'>
      <p className='ml-96'>@Zeit.All rights reserved</p>
     </div>
     </div>
    </div>
  )
}

export default Footer