import React from 'react';
import front from '../assests/Group 76.png';
import back from '../assests/Group 77.png';
import UI from '../assests/Group 83.png';
import res from '../assests/Group 78.png';
import custom from '../assests/Group 79.png';
import content from '../assests/Group 80.png';
import api from '../assests/Group 81.png';
import { Link } from 'react-router-dom';

const Serves = () => {
  return (
    <>
    
   
    <div className='space-y-24'>
        
     
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2 pr-6'>
          <img className='w-3/4 mx-auto' src={front} alt="Frontend Development" />
        </div>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>FRONTEND DEVELOPMENT</h1>
          <p className='font-serif text-xl mb-6'>
            Your frontend service is dedicated to crafting visually engaging and intuitive user interfaces that enhance the overall user experience. We employ the latest technologies and design principles to create responsive and seamlessly interactive websites.
          </p>
          <p className='font-serif text-xl mb-6'>
            Our team is adept at translating your brand identity into compelling visuals, ensuring a cohesive and memorable online presence.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-blue-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
              <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Backend Development Section */}
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>BACKEND DEVELOPMENT</h1>
          <p className='font-serif text-xl mb-6'>
            Our backend service focuses on building the robust foundation that powers your website or application. We specialize in creating efficient and scalable server-side architectures, ensuring seamless data management and processing.
          </p>
          <p className='font-serif text-xl mb-6'>
            Our experienced backend developers are skilled in optimizing performance and implementing secure data storage solutions.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-green-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
            <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
        <div className='w-1/2 pl-6'>
          <img className='w-3/4 mx-auto' src={back} alt="Backend Development" />
        </div>
      </div>

      {/* UI/UX Design Section */}
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2 pr-6'>
          <img className='w-3/4 mx-auto' src={UI} alt="UI/UX Design" />
        </div>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>UI/UX DESIGN</h1>
          <p className='font-serif text-xl mb-6'>
            Transforming your digital presence with expert UI/UX design services. From wireframing to prototyping, we craft user-centric interfaces that captivate and convert. Our iterative approach ensures constant refinement based on user feedback, guaranteeing optimal usability and satisfaction.
          </p>
          <p className='font-serif text-xl mb-6'>
            Partner with us to bring your vision to life with seamless, intuitive design solutions across platforms and devices.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-purple-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
            <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Responsiveness Section */}
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>RESPONSIVENESS</h1>
          <p className='font-serif text-xl mb-6'>
            Our dedication to responsiveness ensures that your website adapts seamlessly to various screen sizes and devices, providing an optimal user experience. Using advanced coding techniques and flexible design frameworks, we guarantee that your content looks and functions flawlessly across desktops, tablets, and smartphones.
          </p>
          <p className='font-serif text-xl mb-6'>
            With a mobile-first approach, we prioritize loading speed and usability, enhancing accessibility for your audience.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-teal-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
            <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
        <div className='w-1/2 pl-6'>
          <img className='w-3/4 mx-auto' src={res} alt="Responsiveness" />
        </div>
      </div>

      {/* Customized Sites Section */}
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2 pr-6'>
          <img className='w-3/4 mx-auto' src={custom} alt="Customized Sites" />
        </div>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>CUSTOMIZED SITES</h1>
          <p className='font-serif text-xl mb-6'>
            Our customized sites are meticulously designed to reflect the unique identity and goals of your business. We go beyond one-size-fits-all solutions, tailoring every aspect to meet your specific requirements.
          </p>
          <p className='font-serif text-xl mb-6'>
            From personalized aesthetics to specialized functionalities, our team ensures that your website stands out and resonates with your target audience.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-orange-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
            <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Content Strategy Section */}
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>CONTENT STRATEGY</h1>
          <p className='font-serif text-xl mb-6'>
            Our content strategy is meticulously crafted to align with your business goals and resonate with your target audience. We conduct thorough research to understand your brand identity and industry landscape, allowing us to develop a comprehensive plan for creating, distributing, and managing content.
          </p>
          <p className='font-serif text-xl mb-6'>
            With a focus on relevance and authenticity, we tailor content to engage and build lasting connections with your audience.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-red-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
            <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
        <div className='w-1/2 pl-6'>
          <img className='w-3/4 mx-auto' src={content} alt="Content Strategy" />
        </div>
      </div>

      {/* API Integration Section */}
      <div className='flex items-center justify-between px-24'>
        <div className='w-1/2 pr-6'>
          <img className='w-3/4 mx-auto' src={api} alt="API Integration" />
        </div>
        <div className='w-1/2'>
          <h1 className='font-serif text-3xl font-semibold mb-6'>API INTEGRATION</h1>
          <p className='font-serif text-xl mb-6'>
            Our API integration services streamline your digital ecosystem by seamlessly connecting disparate systems, enabling smooth data flow and communication.
          </p>
          <p className='font-serif text-xl mb-6'>
            We specialize in integrating third-party APIs to enhance functionalities, whether it's payment gateways, social media platforms, or other software solutions. With a focus on efficiency and compatibility.
          </p>
          <div className='mt-6'>
            <button className='font-serif bg-indigo-500 text-white border border-gray-300 rounded shadow-lg px-6 py-3'>
            <Link to="/OurWorks">View Our Works</Link>
            </button>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Serves;
