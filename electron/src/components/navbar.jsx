// src/components/navbar.jsx
import React from "react"; // Ensure this line is uncommented
import { Link } from "react-router-dom"; // Use Link for navigation

const Navbar = () => {
  return (
    <nav className="bg-[#FF0037] text-white py-4">
      <div className="max-w-[1248px] w-full mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SmartCheck</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;