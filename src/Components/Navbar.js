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
    <>
      <div className="p-4 bg-white shadow-lg sticky top-0 z-50">
        <div className="container flex items-center justify-between mx-auto"> 
          <img className='w-12 h-12 md:w-16 md:h-16 mr-6' src={logo} alt="logo" />
          
          <ul className="hidden md:flex md:space-x-8 text-center md:font-serif">
            <li className={`text-black text-lg md:text-xl ${location.pathname === "/" ? "font-bold text-purple-500" : ""}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`text-black text-lg md:text-xl ${location.pathname === "/service" ? "font-bold text-purple-500" : ""}`}>
              <Link to="/service">Services</Link>
            </li>
            <li className={`text-black text-lg md:text-xl ${location.pathname === "/Events" ? "font-bold text-purple-500" : ""}`}>
              <Link to="/Events">Events</Link>
            </li>
          </ul>

          <div className="hidden md:flex space-x-5">
            <button className="px-3 py-2 font-serif font-medium text-white bg-purple-500 rounded hover:bg-purple-600">
              <Link to="/contact">Schedule a Call</Link>
            </button>
            <button onClick={click} className="px-3 py-2 font-serif font-medium text-white bg-green-500 rounded hover:bg-green-600">
              Recent Updates
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='cursor-pointer md:hidden'>
            {!toggle ?
              <IoMenu size={30} onClick={() => setToggle(true)} />
              : <IoClose size={30} onClick={() => setToggle(false)} />}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {toggle && (
          <ul className="absolute top-16 right-0 w-full bg-white rounded shadow-2xl font-serif md:hidden">
            <li className={`p-3 text-black border-b ${location.pathname === "/" ? "font-bold text-purple-500" : ""}`}>
              <Link to="/" onClick={() => setToggle(false)}>Home</Link>
            </li>
            <li className={`p-3 text-black border-b ${location.pathname === "/service" ? "font-bold text-purple-500" : ""}`}>
              <Link to="/service" onClick={() => setToggle(false)}>Services</Link>
            </li>
            <li className={`p-3 text-black ${location.pathname === "/Events" ? "font-bold text-purple-500" : ""}`}>
              <Link to="/Events" onClick={() => setToggle(false)}>Events</Link>
            </li>
            <li className="p-3">
              <button className="w-full px-3 py-2 font-serif font-medium text-white bg-purple-500 rounded hover:bg-purple-600">
                <Link to="/contact" onClick={() => setToggle(false)}>Schedule a Call</Link>
              </button>
            </li>
            <li className="p-3">
              <button onClick={click} className="w-full px-3 py-2 font-serif font-medium text-white bg-green-500 rounded hover:bg-green-600">
                Recent Updates
              </button>
            </li>
          </ul>
        )}
      </div>
      
      {/* Page Content Adjustment */}
      <div className={`transition-all duration-300 ${toggle ? 'mt-40' : 'mt-0'}`}>
        {/* Your page content goes here */}
      </div>
      
      <ToastContainer />
    </>
  );
};

export default Navbar;
