import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <div className='flex justify-center items-center p-4'>
      <div className='bg-purple-300 shadow-lg rounded-lg p-6 w-full max-w-xl h-40 flex items-center'>
        <TypeAnimation
          sequence={[
            'In the fast-paced dance of technology, only those who innovate survive. Keep coding, keep evolving.',
            1000,
            'Your website is the window to your business. Make sure it is clean, informative, and inviting.',
            1000,
            'Every line of code is a step towards perfection. Strive for excellence, and your website will reflect it.',
            1000,
            'Code your dreams into reality and watch your website become the bridge between your ideas and success.',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: '1.25rem',
            fontFamily: 'serif',
            textAlign: 'center',
            textTransform: 'uppercase',
            display: 'block',
          }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Intro;
