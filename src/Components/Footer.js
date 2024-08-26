import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0 text-center">
            <Link to="/" className="text-gray-800 font-serif hover:text-purple-700 mb-2 md:mb-0">
              Home
            </Link>
            <Link to="/service" className="text-gray-800 font-serif hover:text-purple-700 mb-2 md:mb-0">
              Services
            </Link>
            <Link to="/events" className="text-gray-800 font-serif hover:text-purple-700 mb-2 md:mb-0">
              Events
            </Link>
          </nav>

          {/* Footer Text */}
          <p className="text-gray-600 font-serif text-center md:text-left">
            © {new Date().getFullYear()} Zeit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
