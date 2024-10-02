import React, { useState, useEffect } from 'react';
import logo from '../assets/eco_plant.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 border-[#6FFF63] border-x-0 border-t-0 border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#1b8500] text-2xl font-bold flex items-center">
          <span><img src={logo} alt="fosec" className='w-10'/></span>
          Fosec
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-[#4E4E4E] dark:text-white hover:text-gray-400">Home</a>
          <a href="#services" className="text-[#4E4E4E] dark:text-white hover:text-gray-400">Services</a>
          <a href="#features" className="text-[#4E4E4E] dark:text-white hover:text-gray-400">Features</a>
          <a href="#contact" className="text-[#4E4E4E] dark:text-white hover:text-gray-400">Contact Us</a>
        </div>

        {/* Dark/Light Mode Toggle */}
        <div onClick={toggleDarkMode} className="relative flex items-center cursor-pointer">
          <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ${darkMode ? 'bg-green-500' : 'bg-gray-300'}`}>
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </div>
          <span className="ml-3 text-sm text-gray-900 dark:text-white">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#0F4901] dark:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#home" className="block text-black dark:text-white hover:text-gray-400">Home</a>
          <a href="#services" className="block text-black dark:text-white hover:text-gray-400">Services</a>
          <a href="#features" className="block text-black dark:text-white hover:text-gray-400">Features</a>
          <a href="#contact" className="block text-black dark:text-white hover:text-gray-400">Contact</a>

          {/* Dark/Light Mode Toggle for Mobile */}
          <div className="flex justify-center mt-4" onClick={toggleDarkMode}>
            <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ${darkMode ? 'bg-green-500' : 'bg-gray-300'}`}>
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
            <span className="ml-3 text-sm text-black dark:text-white">{darkMode ? 'Light' : 'Dark'}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
