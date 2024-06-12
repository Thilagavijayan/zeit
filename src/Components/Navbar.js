import React, {useState} from 'react'
import logo from '../assests/logo.png';
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
   
    <div className="p-4 overflow-hidden bg-white shadow-lg">
    <div className="container flex items-center justify-between mx-auto">
    <img className='w-12 h-12 md:ml-7' src= {logo} alt="logo" />
      <ul className="hidden md:space-x-4 md:flex md:font-serif">
        <li className="text-Black"><Link to="/">Home</Link> </li>
        <li className="text-Black"><Link to="/service">Services</Link> </li>
      </ul>
      <div className="hidden px-4 py-2 font-serif font-medium text-white bg-purple-500 rounded mr-7 hover:bg-purple-600 lg:inline-block">
        <button><Link to="/contact">Schedule a call</Link></button>
      </div>
      <div className='cursor-pointer md:hidden'>
        {!toggle?
        <IoMenu onClick={() => setToggle(true)} />
        :<IoClose className='float-right' onClick={() => setToggle(false)}/>}
        {toggle?
        <ul className="flex-col p-2 mt-8 font-serif bg-white rounded shadow-2xl hidden-box">
        <li className="p-3 transition-all ease-in-out cursor-pointer text-Black hover:scale-110">Home</li>
        <li className="p-3 transition-all ease-in-out cursor-pointer text-Black hover:scale-110">Services</li>
        <li className="p-3 transition-all ease-in-out cursor-pointer text-Black hover:scale-110">Contact</li>
        </ul>
      :null}
      </div>
      </div>
  </div>
  )
}


export default Navbar