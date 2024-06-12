import React from 'react'
import contact from '../assests/contact.png'
import insta from '../assests/instagram logo.png'
import linked from '../assests/linkedin logo.png'
import twitter from '../assests/twitter icon.png'
import { Link } from 'react-router-dom';

const Contactus = () => {
  return (
    <div>
      <h1 className='mt-5 mb-12 ml-24 font-serif text-6xl font-medium'>NEWS</h1>
      <div className='flex mb-16'>
      <h1 className='h-32 ml-24 border-l-2 border-black'></h1>
      <div>
        <h1 className='ml-6 font-serif text-2xl font-medium text-black'>November 2023</h1>
        <h3 className='mt-5 ml-6 '>Visit a school for students encouragement and made a idea to take decision. What steps the students are taken or chosen for next level</h3>
      </div>
      <h1 className='h-32 ml-24 border-l-2 border-black'></h1>
      <div>
        <h1 className='ml-6 font-serif text-2xl font-medium text-black'>November 2023</h1>
        <h3 className='mt-5 ml-6 '> Visit a school for students encouragement and made a idea to take decision. What steps the students are taken or chosen for next level</h3>
      </div>
      <h1 className='h-32 ml-24 border-l-2 border-black'></h1>
      <div className='mr-24'>
        <h1 className='ml-6 font-serif text-2xl font-medium text-black'>November 2023</h1>
        <h3 className='mt-5 ml-6 '> Visit a school for students encouragement and made a idea to take decision. What steps the students are taken or chosen for next level</h3>
      </div>
      </div>



      <div>
      <div className='container flex items-center justify-between w-5/6 p-4 mx-auto mt-12 mb-8 text-sm bg-white border border-gray-300 shadow-xl h-36'>
        <img className='w-48' src= {contact} />
        <div className='ml-5 font-serif text-3xl'>We are excited to discuss your software development needs!!!</div>
        <div className="hidden px-5 py-3 font-serif font-semibold text-white bg-purple-500 rounded mr-7 hover:bg-purple-600 lg:inline-block">
        <button><Link to="/contact">Contact Us</Link></button>
      </div>
        </div>
      </div>
      <div className='flex'>
      <h1 className='mt-12 mb-12 ml-24 font-serif text-5xl font-medium'>CONNECT:</h1>
      <img className='h-12 mt-12' src= {insta} />
      <img className='h-12 mt-12' src= {linked} />
      <img className='h-12 mt-12' src= {twitter} />
      </div>

      
    </div>
  )
}

export default Contactus