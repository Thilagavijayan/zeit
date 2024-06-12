import React from 'react'
import team from '../assests/s4.png'
import quality from '../assests/s3.png'
import trust from '../assests/s2.png'
import client from '../assests/s1.png'


const Promote = () => {
  return (
    <div>
      <h1 className='mt-16 mb-20 ml-24 font-serif text-6xl font-medium mr-96'>Why you choose  us for software development</h1>
      <div className='flex mb-16'>
      <h1 className='h-64 ml-24 border-l-2 border-black'></h1>
      <div>
        <h1 className='ml-6 font-serif text-2xl font-medium text-purple-700'>Dedicated Teams</h1>
        <h3 className='mt-5 ml-6 '>Dedicated teams excel through collaboration, pooling diverse expertise for efficient problem-solving. Their unified focus promotes seamless communication, fostering innovation and achieving shared goals. By prioritizing teamwork, these dedicated groups navigate challenges effectively, ensuring sustained success in their endeavors.
</h3>
      </div>
      <img className='w-3/4 ml-10' src= {team}/>
      <h1 className='h-64 ml-24 border-l-2 border-black'></h1>
      <div>
        <h1 className='ml-6 font-serif text-2xl font-medium text-purple-700'>Focus on quality</h1>
        <h3 className='mt-5 ml-6 '> Our dedicated team of professionals adheres to industry best practices, employing rigorous testing and validation processes to guarantee the reliability, functionality, and security of our solutions. We view quality not as a checkbox but as an intrinsic part of our work ethos, striving to exceed expectations and create products that stand the test of time.</h3>
      </div>
      <img className='w-4/5 mr-20' src= {quality}/>
      </div>

      <div className='flex mb-16'>
      <h1 className='h-64 ml-24 border-l-2 border-black'></h1>
      <div>
        <h1 className='ml-6 font-serif text-2xl font-medium text-purple-700'>Trust</h1>
        <h3 className='mt-5 ml-6 '>From our initial interactions to the successful completion of projects, we prioritize integrity and accountability. Our team is dedicated to fostering trust by actively listening to our clients, understanding their unique needs, and providing transparent communication at every stage.</h3>
      </div>
      <img className='ml-10 w-42' src= {trust}/>
      <h1 className='h-64 ml-24 border-l-2 border-black'></h1>
      <div>
        <h1 className='ml-6 font-serif text-2xl font-medium text-purple-700'>Client-Centric approach</h1>
        <h3 className='mt-5 ml-6 '>  Through open and transparent communication, we actively involve clients in the decision-making process, ensuring their vision is not just understood but intricately woven into every aspect of the project. We view our clients as partners, and our dedicated team is driven by a relentless pursuit of delivering solutions that exceed expectations.</h3>
      </div>
      <img className='w-4/5 mr-48' src= {client}/>
      </div>
      </div>
  )
}

export default Promote