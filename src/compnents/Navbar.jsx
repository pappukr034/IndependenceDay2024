import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-orange-400 transition-colors duration-300 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
            MyPatrioticSite
          </a>
        </div>
        <div className="hidden md:flex space-x-8   ">
          <a href="#home" className="hover:text-orange-400 transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-orange-400 transition-colors duration-300">
            About
          </a>
          <a href="#projects" className="hover:text-orange-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-400 transition-colors duration-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block  flex-col justify-center items-center' : 'hidden'} transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} duration-500 ease-in-out`}>
        <a href="#home" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300 w-full text-center">Home</a>
        <a href="#about" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300 w-full text-center">About</a>
        <a href="#projects" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300 w-full text-center">Projects</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300 w-full text-center">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
