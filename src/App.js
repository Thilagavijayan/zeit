 
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Service from './page/Service';
import Contactt from './page/Contactt';




function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contactt/>}/>
        </Routes>
        <Footer/>
       </Router>
       
    </div>
     
  );
}

export default App;
