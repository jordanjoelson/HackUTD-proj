import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SmartCheck.png"; // Import the main logo
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HelpIcon from "@mui/icons-material/Help";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Dollar sign icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Profile Icon
import AssistantIcon from "@mui/icons-material/Assistant"; // AI Assistant Icon

const Navbar = () => {
  return (
    <nav className="bg-[linear-gradient(111.9deg,_rgb(221,_49,_49)_0.3%,_rgb(0,_8,_119)_100.7%)] text-white h-screen w-64 fixed flex flex-col py-6">
      
      {/* Logo */}
      <Link to="/" className="mb-12 mx-auto">
        <img src={logo} alt="SmartCheck Logo" className="h-12" />
      </Link>


      {/* Navigation Links */}
      <ul className="space-y-6 w-full px-4 flex flex-col items-start">

        {/* Profile Button */}
        <Link
          to="/profile" // Update to the correct profile route
          className="hover:bg-red-600 flex items-center py-2 px-4 rounded-md transition w-full"
        >
          <AccountCircleIcon className="mr-2" /> {/* Profile Icon */}
            Profile
        </Link>

        {/* Dashboard Link */}
        <li>
          <Link
            to="/dashboard"
            className="hover:bg-red-600 flex items-center py-2 px-4 rounded-md transition w-full"
          >
            <DashboardIcon className="mr-2" />
            Dashboard
          </Link>
        </li>

        {/* AI Assistant Link with AI Icon */}
        <li>
          <Link
            to="/ai-assistant" // Update to your AI Assistant route
            className="hover:bg-red-600 flex items-center py-2 px-4 rounded-md transition w-full"
          >
            <AssistantIcon className="mr-2 h-6 w-6" /> {/* AI Assistant Icon */}
            AI Assistant
          </Link>
        </li>

        {/* Product Pricing Link with Dollar Icon */}
        <li>
          <Link
            to="#product-pricing" // Replace with your Product Pricing route if available
            className="hover:bg-red-600 flex items-center py-2 px-4 rounded-md transition w-full"
          >
            <AttachMoneyIcon className="mr-2 h-6 w-6" /> {/* Dollar sign icon */}
            Product Pricing
          </Link>
        </li>

        {/* FAQ Link */}
        <li>
          <Link
            to="/faq" // Replace with your FAQ route
            className="hover:bg-red-600 flex items-center py-2 px-4 rounded-md transition w-full"
          >
            <HelpIcon className="mr-2" />
            FAQ
          </Link>
        </li>
      </ul>

      {/* Log Out Button */}
      <div className="mt-auto w-full">
        <Link
          to="/logout" // Replace with your logout route or logic
          className="hover:bg-red-600 flex items-center py-3 px-6 rounded-md transition text-xl bg-red-600 w-full"
        >
          <PersonAddIcon className="mr-2" />
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
