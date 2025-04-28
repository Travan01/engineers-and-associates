import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="bg-blue-700 p-4 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Engineers & Associates</h1>
        <ul className="flex space-x-8">
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Services</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;