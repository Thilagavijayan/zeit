import React from 'react'
import women from '../assests/women.png'
import child from '../assests/child.png'
import consult from '../assests/consult.png'
const Value = () => {
 
  return (
    <div>
      <h1 className='mt-12 font-serif text-6xl text-center'>We value your needs</h1>
<h3 className='font-serif font-medium text-center text-gray-600 mb-7'>Your needs are at the core of our priorities, and we are dedicated to providing tailored solutions</h3>


<div className='grid grid-cols-3 px-20 justify-evenly'>

<div className="relative items-center justify-center overflow-hidden cursor-pointer group">
<div>
  <img className='object-cover w-full h-full' src={women} alt=''/>
</div>
<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[100%] group-hover:translate-y-0 transition-all bg-black bg-opacity-50'>
  <h1 className='font-serif text-3xl font-bold'>Women empowerment</h1>
 
</div>
   
 </div>
 
 <div className="relative items-center justify-center overflow-hidden cursor-pointer group">
<div >
  <img className='object-cover w-full h-full' src={child} alt=''/>
</div>
<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[100%] group-hover:translate-y-0 transition-all bg-black bg-opacity-50'>
  <h1 className='font-serif text-3xl font-bold'>Children Education</h1>
  
</div>
   </div>

   <div className="relative items-center justify-center overflow-hidden cursor-pointer group">
<div>
  <img className='object-cover w-full h-full' src={consult} alt=''/>
</div>
<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[100%] group-hover:translate-y-0 transition-all bg-black bg-opacity-50'>
  <h1 className='font-serif text-3xl font-bold'>Consultation</h1>
  
</div>
   </div>
  
</div>


    </div>
  )
}

export default Value