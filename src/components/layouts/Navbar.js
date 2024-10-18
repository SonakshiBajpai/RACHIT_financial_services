import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font bg-white shadow-lg">
      <div className="flex justify-between p-5 items-center">
        {/* Logo */}
        <a href="/" className="flex title-font font-medium items-center text-gray-900">
          <img
            className="w-48 h-12 object-contain"
            src="./rachitlogo.png"
            alt="Rachit Financial Services logo"
          />
        </a>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={handleHamburgerClick}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Main Navbar - Hidden on Mobile */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center">
          <a href="/" className="mr-8 hover:text-blue-600 font-semibold">
            Home
          </a>
          <a href="/about" className="mr-8 hover:text-blue-600 font-semibold">
            How We Work
          </a>

          {/* Services Dropdown */}
          <div className="relative mr-8">
            <button
              onMouseEnter={toggleDropdown}
              className="hover:text-blue-600 font-semibold flex items-center"
            >
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 w-48 bg-white border border-gray-200 shadow-lg rounded-lg mt-2 z-50">
                <a
                  href="/financial-assessment"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                >
                  Financial Assessment
                </a>
                <a
                  href="/tax-solutions"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                >
                  Tax Solutions
                </a>
                <a
                  href="/insurance-solutions"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                >
                  Insurance Solutions
                </a>
              </div>
            )}
          </div>
          <a href="/FAQs" className="mr-8 hover:text-blue-600 font-semibold">
            FAQs
          </a>
        </nav>

        {/* Contact Button */}
        <a href="/contact" className="hidden md:inline-block">
          <button className="inline-flex items-center bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-white shadow-md hover:shadow-lg">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-500 bg-opacity-90 absolute top-16 left-0 w-full text-white p-4 z-50">
          <a
            href="/"
            className="block py-2 hover:bg-red-700 rounded-md text-lg"
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 hover:bg-red-700 rounded-md text-lg"
          >
            How We Work
          </a>

          {/* Services Dropdown in Mobile */}
          <div>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left py-2 hover:bg-red-700 rounded-md text-lg"
            >
              Services
              <svg
                className="w-4 h-4 ml-1 inline"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="pl-4">
                <a
                  href="/financial-assessment"
                  className="block py-2 hover:bg-red-700 rounded-md text-lg"
                >
                  Financial Assessment
                </a>
                <a
                  href="/tax-solutions"
                  className="block py-2 hover:bg-red-700 rounded-md text-lg"
                >
                  Tax Solutions
                </a>
                <a
                  href="/insurance-solutions"
                  className="block py-2 hover:bg-red-700 rounded-md text-lg"
                >
                  Insurance Solutions
                </a>
              </div>
            )}
          </div>
          <a
            href="/FAQs"
            className="block py-2 hover:bg-red-700 rounded-md text-lg"
          >
            FAQs
          </a>
          <a
            href="/contact"
            className="block py-2 mt-4 bg-blue-600 text-white text-center rounded-full"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
