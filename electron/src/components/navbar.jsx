/* import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FF0037] text-white py-4 shadow-md transition-all duration-300">
      <div className="max-w-[1248px] w-full mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-6">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:underline">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About Us</Link></li>
          <li><Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:underline">FAQs</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;