import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
   <div className='mt-4 mb-5 ml-20 mr-20 lg:text-2xl'>
    <TypeAnimation
    sequence={[
      
      'In the fast-paced dance of technology, only those who innovate survive. Keep coding, keep evolving.',
      1000, 
      'Your website is the window to your business. Make sure it is clean informative and inviting.',
      1000,
      'Every line of code is a step towards perfection. Strive for excellence, and your website will reflect it.',
      1000,
      'Code your dreams into reality and watch your website become the bridge between your ideas and success.',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '2rem', display: 'inline-block',marginLeft:'1.25rem', marginright:'1.25rem', fontFamily:'serif', textAlign:'center',textTransform:'uppercase', '@media (max-width: 360px)': {
      fontSize: '1rem',
      marginLeft: '0.75rem',
      marginRight: '0.75rem',
    }}}
    repeat={Infinity}
  />
  </div>
  )
}

export default Intro