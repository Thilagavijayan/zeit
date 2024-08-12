import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assests/logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const click = () => {
  toast.info(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fas fa-bell" style={{ marginRight: '10px', fontSize: '24px' }}></i>
      <div>
        <div> Zeit Tech helps to empower students </div>
        <button 
          onClick={() => window.location.href = "https://www.linkedin.com/company/zeittechgroup/posts/?feedView=all"} 
          style={{ marginTop: '10px', marginRight: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Watch Now
        </button>
      </div>
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

  return (
    <div className="p-4 overflow-hidden bg-white shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        <img className='w-12 h-12 md:ml-7' src={logo} alt="logo" />
        <ul className="hidden md:space-x-4 md:flex md:font-serif">
          <li className="text-black"><Link to="/">Home</Link></li>
          <li className="text-black"><Link to="/service">Services</Link></li>
          <li className="text-black"><Link to="/Events">Events</Link></li>

        </ul>
        <div className="flex space-x-4">
          <button className="px-4 py-2 font-serif font-medium text-white bg-purple-500 rounded hover:bg-purple-600">
            <Link to="/contact">Schedule a call</Link>
          </button>
          <button onClick={click} className="px-4 py-2 font-serif font-medium text-white bg-green-500 rounded hover:bg-green-600">
            Click to Notify
          </button>
        </div>
        <div className='cursor-pointer md:hidden'>
          {!toggle ?
            <IoMenu onClick={() => setToggle(true)} />
            : <IoClose className='float-right' onClick={() => setToggle(false)} />}
          {toggle ?
            <ul className="flex-col p-2 mt-8 font-serif bg-white rounded shadow-2xl hidden-box">
              <li className="p-3 transition-all ease-in-out cursor-pointer text-black hover:scale-110">Home</li>
              <li className="p-3 transition-all ease-in-out cursor-pointer text-black hover:scale-110">Services</li>
              <li className="p-3 transition-all ease-in-out cursor-pointer text-black hover:scale-110">Contact</li>
            </ul>
            : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Navbar;