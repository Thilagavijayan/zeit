import React from 'react';
import Landing from '../Components/Landing';
import Serves from '../Components/Serves';
import Testinomial from '../Components/Testinomial';




const Service = () => {
  return (
    <div>
        {/* Landing */}
        <Landing/>
        <div className="mt-8"></div>
        {/* Service */}
        <Serves/>
        <div className="mb-10"></div>
        {/* Testinomial */}
        <Testinomial/>
       
      



    </div>
  )
}

export default Service