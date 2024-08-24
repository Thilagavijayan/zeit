import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assests/logo.png'; 
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const click = () => {
  toast.info(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <i className="fas fa-bell" style={{ marginRight: '10px', fontSize: '24px' }}></i>
        <div>Dive into Zeit Tech for essential tech tips and insights!</div>
      </div>
      <button 
        onClick={() => window.location.href = "https://www.instagram.com/zeit_tech/"} 
        style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Explore
      </button>
    </div>,
    {
      icon: false,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); 

  return (
    <div className="p-4 bg-white shadow-lg">
      <div className="container flex items-center justify-between mx-auto "> 
       
        <img className='w-16 h-16  mr-6 ' src={logo} alt="logo" />
        
      
        <ul className="hidden md:space-x-8 text-center md:flex md:font-serif">
          <li className={`text-black text-xl ${location.pathname === "/" ? "font-bold text-purple-500" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`text-black text-xl ${location.pathname === "/service" ? "font-bold text-purple-500" : ""}`}>
            <Link to="/service">Services</Link>
          </li>
          <li className={`text-black text-xl ${location.pathname === "/Events" ? "font-bold text-purple-500" : ""}`}>
            <Link to="/Events">Events</Link>
          </li>
        </ul>
        
        
        <div className="flex space-x-5">
          <button className="px-3 py-2 font-serif font-medium text-white bg-purple-500 rounded hover:bg-purple-600">
            <Link to="/contact">Schedule a Call</Link>
          </button>
          <button onClick={click} className="px-3 py-2 font-serif font-medium text-white bg-green-500 rounded hover:bg-green-600">
            Recent Updates
          </button>
        </div>

      
        <div className='cursor-pointer md:hidden'>
          {!toggle ?
            <IoMenu onClick={() => setToggle(true)} />
            : <IoClose className='float-right' onClick={() => setToggle(false)} />}
          {toggle ?
            <ul className="absolute right-0 p-2 mt-8 bg-white rounded shadow-2xl font-serif">
              <li className={`p-3 text-black ${location.pathname === "/" ? "font-bold text-purple-500" : ""}`}>
                <Link to="/" onClick={() => setToggle(false)}>Home</Link>
              </li>
              <li className={`p-3 text-black ${location.pathname === "/service" ? "font-bold text-purple-500" : ""}`}>
                <Link to="/service" onClick={() => setToggle(false)}>Services</Link>
              </li>
              <li className={`p-3 text-black ${location.pathname === "/Events" ? "font-bold text-purple-500" : ""}`}>
                <Link to="/Events" onClick={() => setToggle(false)}>Events</Link>
              </li>
            </ul>
            : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
