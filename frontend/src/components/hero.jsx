import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Hero = () => {
  return (
    <section className="bg-transparent mt-24 mx-4 md:mx-12 lg:mx-20 relative overflow-visible">
      {/* Blur elements */}
      <div className="absolute top-[5%] left-[-25px] w-[500px] h-[500px] bg-[#48bf84]/60 rounded-full blur-[120px] z-0" />
      <div className="absolute top-[15%] right-[100px] w-[500px] h-[400px] bg-[#48bf84]/60 rounded-full blur-[120px] z-0" />
      
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="max-w-[1248px] w-full mx-auto flex flex-col md:flex-row items-center justify-between h-screen">
            {/* Left side content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start justify-center">
              <h1 className="text-[48px] font-bold mb-6 leading-tight text-black">Placeholder Title</h1>
              <p className="text-[20px] mb-8 text-gray-600">Placeholder text for description goes here.</p>
              
              {/* Learn More Button with Animated Gradient */}
              <Link to="/faq">
                <button className="animated-gradient text-white rounded-[50px] px-8 py-3 transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
            
            {/* Right side placeholder */}
            <div className="w-full md:w-1/2 flex justify-end items-center">
              {/* Placeholder for future content */}
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Your content here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;