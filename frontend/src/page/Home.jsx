import React from 'react'
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import About from '../Components/About';
import Value from '../Components/Value';
import Slide from '../Components/Slide';
import Misvis from '../Components/Misvis';
import Promote from '../Components/Promote';
import Testinomial from '../Components/Testinomial';
import Contactus from '../Components/Contactus';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
                
   
    {/* Intro */}
        <Intro/>
    {/* Slide*/}
        <Slide/>
    {/* About */}
        <About/>
    {/* Value */}
        <Value/>
    {/* Misvis */}
        <Misvis/>
    {/* Promote */}
        <Promote/>
    {/* Testinomial */}
        <Testinomial/>
    {/* Contact us */}
        <Contactus/>
        
    </div>
  )
}

export default Home