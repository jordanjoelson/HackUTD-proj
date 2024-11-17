import React, { useState } from "react";
import streetImage from './pic.jpg';
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  // Fake Reviews Data
  const reviews = [
    {
      text: "SmartCheck has completely transformed the way I manage my connectivity. The personalized recommendations have saved me time and money!",
      author: "Jessie L., Tech Enthusiast"
    },
    {
      text: "I was skeptical at first, but after using SmartCheck for a week, I can’t imagine going back. The real-time feedback is so helpful!",
      author: "Carlos M., Freelancer"
    },
    {
      text: "Thanks to SmartCheck and its AI assistant Bolt, I finally found the perfect internet plan for my needs. Highly recommend!",
      author: "Samantha K., Remote Worker"
    },
    {
      text: "Super easy to use! The subscription tracker and product recommendations are spot on, and I love the way it keeps everything organized.",
      author: "Dave R., Small Business Owner"
    }
  ];

  return (
    <div className="flex flex-col h-screen ml-64 bg-[radial-gradient(circle_at_18.7%_37.8%,rgb(250,250,250)_0%,rgb(225,234,238)_90%)]"> {/* Unified background for entire homepage */}
      <section id="home" className="hero flex-grow flex justify-center items-center text-black mb-8 mt-16 relative"> {/* Removed bg-white */}
        <div className="max-w-[1248px] w-full px-4 py-30">
          <div className="text-center relative">
            {/* Image */}
            <img 
              src={streetImage} 
              alt="Description of the image" 
              className="w-full h-auto max-w-[1248px] mx-auto mb-4 rounded-3xl opacity-90 bg-transparent" 
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
              <h1 className="text-8xl font-bold mb-10 font-sans">Welcome to SmartCheck</h1>
              <p className="text-5xl mb-10 font-sans font-italic"> By: Frontier Communications | HackUTD</p>
              {/* Additional Text */}
              <p className="text-4xl mb-12 font-sans">Connecting People, Ideas, and Innovations in Real Time</p>
              {/* Scroll prompt */}
              <div className="flex flex-col items-center animate-bounce">
                <span className="text-4xl font-bold">↓</span>
                <span className="text-lg">Scroll Down</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="min-h-[50vh] flex justify-center items-center mb-8">
        <div className="border border-gray-300 rounded-[30px] p-24 max-w-[1248px] w-full text-center">
          <h3 className="text-4xl font-bold mb-4 text-black">What is SmartCheck?</h3>
          <p className="text-xl text-black">
            Welcome to SmartCheck, your ultimate personal assistant for all things connectivity with Frontier! With SmartCheck, you don’t just stay connected – you thrive! Our smart AI assistant, Bolt, is here to provide you with personalized recommendations tailored just for you, helping you discover the best plans and products to fit your unique needs. Whether you're looking for the perfect internet plan or want real-time feedback on your current setup, Bolt is ready to guide you every step of the way. Effortlessly track your subscriptions, receive actionable insights, and make informed decisions with ease. Get ready to take control of your connectivity like never before, with SmartCheck – the future of effortless communication is just a click away!
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">What Our Users Are Saying!</h2>
        <div className="max-w-[1248px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 transition-shadow duration-300">
                <p className="text-xl mb-4 text-gray-800 font-sans">"{review.text}"</p>
                <p className="font-semibold text-lg text-gray-600">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;