import React from 'react'
import front from '../assests/Group 76.png'
import back from '../assests/Group 77.png'
import UI from '../assests/Group 83.png'
import res from '../assests/Group 78.png'
import custom from '../assests/Group 79.png'
import content from '../assests/Group 80.png'
import api from '../assests/Group 81.png'

const Serves = () => {
  return (
    <div>
        <div className='flex'>
        <div>
            <img className='w-3/4 mt-24 ml-24' src={front}/>
        </div>
        <div>
            <h1 className='mt-48 font-serif text-3xl font-semibold mb-9'>FRONTEND DEVELOPMENT</h1>
            <h3 className='mr-24 font-serif text-xl mb-9'>Your frontend service is dedicated to crafting visually engaging and intuitive user interfaces that enhance the overall user experience. We employ the latest technologies and design principles to create. </h3>
            <h3 className='mr-24 font-serif text-xl mb-9'>Responsive and seamlessly interactive websites. Our team is adept at translating your brand identity into compelling visuals, ensuring a cohesive and memorable online presence.</h3>
            
    
     </div>
            
        </div>


        <div className='flex'>
        <div>
            <h1 className='mt-48 ml-24 font-serif text-3xl font-semibold mb-9'>BACKEND DEVELOPMENT</h1>
            <h3 className='ml-24 font-serif text-xl mb-9'>Our backend service focuses on building the robust foundation that powers your website or application. We specialize in creating efficient and scalable server-side architectures, ensuring seamless data management and processing. </h3>
            <h3 className='ml-24 font-serif text-xl mb-9'> Our experienced backend developers are skilled in optimizing performance and implementing secure data storage solutions.</h3>
          
        </div>
        <div>
            <img className='w-3/4 mt-20 mr-24' src={back}/>
        </div>
        </div>


        <div className='flex'>
        <div>
            <img className='w-3/4 mt-24 ml-24' src={UI}/>
        </div>
        <div>
            <h1 className='font-serif text-3xl font-semibold mt-36 mb-9'>UI/UX DESIGN</h1>
            <h3 className='mr-24 font-serif text-xl mb-9'>Transforming your digital presence with expert UI/UX design services. From wireframing to prototyping, we craft user-centric interfaces that captivate and convert. Our iterative approach ensures constant refinement based on user feedback, guaranteeing optimal usability and satisfaction</h3>
            <h3 className='mr-24 font-serif text-xl mb-9'>Product's experience across platforms and devices, driving engagement and loyalty.Partner with us to bring your vision to life with seamless, intuitive design solutions. </h3>
            
        </div></div>

        

        <div className='flex'>
        <div>
            <h1 className='ml-24 font-serif text-3xl font-semibold mt-36 mb-9'>RESPONSIVENESS</h1>
            <h3 className='ml-24 font-serif text-xl mb-9'>Our dedication to responsiveness ensures that your website adapts seamlessly to various screen sizes and devices, providing an optimal user experience. Using advanced coding techniques and flexible design frameworks, we guarantee that your content looks and functions flawlessly across desktops, tablets, and smartphones. </h3>
            <h3 className='ml-24 font-serif text-xl mb-9'>
 With a mobile-first approach, we prioritize loading speed and usability, enhancing accessibility for your audience.</h3>
            
        </div>
        <div>
            <img className='w-3/4 mt-20 mr-24' src={res}/>
        </div>
        </div>


        <div className='flex'>
        <div>
            <img className='w-3/4 mt-24 ml-24' src={custom}/>
        </div>
        <div>
            <h1 className='mt-48 font-serif text-3xl font-semibold mb-9'>CUSTOMIZED SITES</h1>
            <h3 className='mr-24 font-serif text-xl mb-9'>Our customized sites are meticulously designed to reflect the unique identity and goals of your business. We go beyond one-size-fits-all solutions, tailoring every aspect to meet your specific requirements.  </h3>
            <h3 className='mr-24 font-serif text-xl mb-9'>From personalized aesthetics to specialized functionalities, our team ensures that your website stands out and resonates with your target audience.</h3>
           
        </div></div>


        
        <div className='flex'>
        <div>
            <h1 className='ml-24 font-serif text-3xl font-semibold mt-36 mb-9'>CONTENT STRATEGY</h1>
            <h3 className='ml-24 font-serif text-xl mb-9'>Our content strategy is meticulously crafted to align with your business goals and resonate with your target audience. We conduct thorough research to understand your brand identity and industry landscape, allowing us to develop a comprehensive plan for creating, distributing, and managing content. </h3>
            <h3 className='ml-24 font-serif text-xl mb-9'>

With a focus on relevance and authenticity, we tailor content to engage and build lasting connections with your audience.</h3>
           
        </div>
        <div>
            <img className='w-3/4 mt-20 mr-24' src={content}/>
        </div>
        </div>

        <div className='flex'>
        <div>
            <img className='w-3/4 mt-24 mb-16 ml-24' src={api}/>
        </div>
        <div>
            <h1 className='mt-48 font-serif text-3xl font-semibold mb-9'>API INTEGRATION</h1>
            <h3 className='mr-24 font-serif text-xl mb-9'>Our API integration services streamline your digital ecosystem by seamlessly connecting disparate systems, enabling smooth data flow and communication.</h3>
            <h3 className='mr-24 font-serif text-xl mb-9'>
 We specialize in integrating third-party APIs to enhance functionalities, whether it's payment gateways, social media platforms, or other software solutions. With a focus on efficiency and compatibility</h3>
           
        </div></div>


       



    </div>
  )
}

export default Serves