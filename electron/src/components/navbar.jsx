import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/SmartCheck.png'; // Import the logo

const Navbar = () => {
  return (
    <nav className="bg-[#FF0037] text-white py-4">
      <div className="max-w-[1248px] w-full mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="SmartCheck Logo" className="h-8 mr-2" /> {/* Use the logo */}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;