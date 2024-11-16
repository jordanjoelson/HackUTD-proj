import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
// Remove the bank icon import if you're not using it for now

const Hero = () => {
  return (
    <section className="bg-transparent mt-24 mx-4 md:mx-12 lg:mx-20 relative overflow-visible">

      
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="max-w-[1248px] w-full mx-auto flex flex-col md:flex-row items-center justify-between"> {/* Adjusted to justify-between */}
            {/* Left side content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start justify-center">
              <h1 className="text-[48px] font-bold mb-6 leading-tight text-black">CheckMatch</h1>
              <p className="text-[20px] mb-8 text-gray-600">Find the best offers tailored just for you.</p>
              
              {/* Learn More Button with Animated Gradient */}
              <Link to="/faq">
                <button className="animated-gradient text-white rounded-full px-8 py-3 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
            
            {/* Right side placeholder for icon or image */}
            <div className="w-full md:w-1/2 flex justify-end items-center">
              {/* Placeholder for the bank icon */}
              <div className="w-[500px] h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Your Image Here</span> {/* Placeholder text */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;