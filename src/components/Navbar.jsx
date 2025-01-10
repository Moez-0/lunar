import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-2 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md shadow-lg transition duration-300"
          : "bg-primary transition duration-300"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">

        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="hover:text-gray-400">
            Features
          </a>
          <span className="text-gray-500">•</span>
          <a href="#docs" className="hover:text-gray-400">
            Documentation
          </a>
        </div>


        <div className="flex items-center justify-center">
          <a href="/" className="text-xl font-bold hover:text-gray-400">
            <img src="logo.svg" alt="Luna Logo" className="w-28" />
          </a>
        </div>

      
        <div className="hidden md:flex items-center space-x-4">
          <a href="#downloads" className="hover:text-gray-400">
            Downloads
          </a>
          <span className="text-gray-500">•</span>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none transition-all duration-75"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-primary">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#features" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:text-gray-400">
                Documentation
              </a>
            </li>
            <li>
              <a href="#downloads" className="hover:text-gray-400">
                Downloads
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
