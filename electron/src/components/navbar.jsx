import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/SmartCheck.png'; // Import the logo
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChatIcon from '@mui/icons-material/Chat';
import StoreIcon from '@mui/icons-material/Store'; // Import StoreIcon for product catalog

const Navbar = () => {
  return (
    <nav className="bg-[#FF0037] text-white py-4">
      <div className="max-w-[1248px] w-full mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="SmartCheck Logo" className="h-8 mr-2" /> {/* Use the logo */}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="hover:underline flex items-center">
              <DashboardIcon className="mr-1" />
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline flex items-center">
              <PersonAddIcon className="mr-1" />
            </Link>
          </li>
          <li>
            <Link to="/bolt" className="hover:underline flex items-center">
              <ChatIcon className="mr-1" />
            </Link>
          </li>
          <li>
            <Link to="/product-catalog" className="hover:underline flex items-center">
              <StoreIcon className="mr-1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;