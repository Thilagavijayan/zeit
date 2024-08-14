import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center md:justify-between items-center flex-col md:flex-row">
          <nav className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
            <Link to="/" className="text-gray-800 font-serif hover:text-purple-700">
              Home
            </Link>
            <Link to="/service" className="text-gray-800 font-serif hover:text-purple-700">
              Services
            </Link>
            <Link to="/Events" className="text-gray-800 font-serif hover:text-purple-700">
              Events
            </Link>
          </nav>
          <p className="text-gray-600 font-serif">
            © {new Date().getFullYear()} Zeit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
