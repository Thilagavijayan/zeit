import React from 'react'
import web from '../assests/web.png'

const About = () => {
  return (
      <div className='flex mt-24 ml-20'>
        <div>
        <h1 className='mb-5 font-serif text-6xl'>Build a Modern Day Website with Higher Conversions</h1>
        <h3 className='font-sans text-xl'>Embracing the latest trends and technologies, we ensure that your website is at the forefront of innovation. Our mobile-first approach guarantees that your site looks stunning and performs flawlessly across all devices, providing an unmatched user experience. Intuitive navigation and user-friendly interfaces are key to driving engagement, and our designers meticulously create seamless interactions that captivate visitors from the moment they land on your website.</h3>
        <h3 className='mt-3 font-sans text-xl'>Each element is strategically placed to guide users effortlessly through their journey and encourage conversions. Beyond aesthetics, we emphasize the importance of functionality and performance. Our team rigorously tests each website, ensuring optimal loading times and smooth functionality. By combining form and function, we create a seamless blend of artistry and practicality.</h3>
        </div>
        <img className='mt-16 ml-40 mr-40 w-80 h-72' src={web} alt='web'/>
    </div>
  )
}

export default About