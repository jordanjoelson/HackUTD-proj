import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50"> {/* Fixed position for the navbar */}
      <header className="bg-white shadow-md"> {/* Background color and shadow for separation */}
        <div className="max-w-[1248px] w-full mx-auto flex items-center justify-between px-4 py-2"> {/* Centered container with padding */}
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                
                className="h-16 w-auto block" // Set display to block for tight fit
                style={{ margin: 0 }} // Ensure no margin
              />
            </Link>
          </div>
          {/* Navigation Section */}
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              {/* Login Button with Animated Gradient Text */}
              <Link
                to="/login"
                className="relative inline-block px-4 py-2 border border-[#48BF84] rounded-[50px] transition duration-300"
              >
                <span className="bg-gradient-to-r from-[#38ef7d] to-[#11998e] bg-clip-text text-transparent">
                  Login
                </span>
              </Link>

              {/* Get Started Button with Animated Gradient */}
              <Link
                to="/getstarted"
                className="animated-gradient text-white rounded-[50px] px-4 py-2 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar; // Keep the export as Navbar