import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#FF0037] shadow-md"> {/* Updated background color */}
      <header>
        <div className="max-w-[1248px] w-full mx-auto flex items-center justify-between px-4 py-2"> {/* Centered container with padding */}
          {/* Logo Section - Placeholder */}
          <div className="flex items-center">
            <Link to="/">
              <div className="h-16 w-16 flex items-center justify-center rounded-full"> {/* Placeholder for logo */}
                <span className="text-xl font-bold text-white">Logo</span> {/* Updated text color to white */}
              </div>
            </Link>
          </div>
          {/* Navigation Section */}
          <nav className="flex items-center space-x-6"> {/* Flex container for horizontal layout */}
            <ul className="flex space-x-6">
              <li>
                <Link to="/dashboard" className="text-white font-bold hover:text-gray-200">Dashboard</Link> {/* Updated text color and made bold */}
              </li>
              <li>
                <Link to="/faq" className="text-white font-bold hover:text-gray-200">FAQ</Link> {/* Updated text color and made bold */}
              </li>
            </ul>
            <div className="flex space-x-4 items-center"> {/* Added items-center for vertical alignment */}
              
              <Link
                to="/login"
                className="text-white font-bold hover:text-gray-200 transition duration-300" // Styled like other links
              >
                Login
              </Link>

              {/* Get Started Button */}
              <Link
                to="/getstarted"
                className="animated-gradient text-white font-bold rounded-full px-4 py-2 transition duration-300" // Made bold
              >
                Smart Search
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar; // Ensure this is exported correctly