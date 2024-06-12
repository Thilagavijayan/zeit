import React from 'react'
import misvis from '../assests/misvis.png' 

const Misvis = () => {
  return (
    <div>
      <div className='flex mt-20'>
      <h1 className='ml-24 text-xl font-semibold w-96'>Best solutions for your problems</h1>
      <h1 className='h-20 ml-12 border-l-2 border-black'></h1>
      <h3 className='ml-8 mr-16'>Continuous learning and adaptability are key to addressing any challenge; embrace curiosity and seek diverse perspectives for innovative solutions.Our commitment to delivering the best solutions remains unwavering. By leveraging cutting-edge technology and a wealth of knowledge, we strive to address your needs comprehensively. Whether you seek guidance on complex issues, clarification on diverse topics, or creative ideas, our goal is to be your trusted source.</h3>
      </div>
      <img className='w-full mt-20 pl-28 pr-28' src= {misvis} alt=''/>
    </div>
  )
}

export default Misvis