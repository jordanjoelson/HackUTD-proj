// src/pages/home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to meet your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on the scope and complexity. We work closely with our clients to establish realistic timelines and deliver high-quality results within the agreed-upon timeframe."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your project continues to perform optimally long after the initial launch."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div>
      <section id="home" className="hero min-h-screen bg-white text-black flex justify-center items-center">
        <div className="max-w-[1248px] w-full px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-2xl mb-6">Your journey to excellence starts here.</p>
            <Link to="/login">
              <button className="px-8 py-4 bg-[#FF0037] text-white rounded-[60px] hover:bg-red-600 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="min-h-[25vh] flex justify-center items-center bg-white text-black"> {/* Set height to half */}
        <div className="bg-gray-100 border border-gray-300 rounded-[30px] p-8 shadow-lg max-w-[1248px] w-full text-center"> {/* Card styling */}
          <h3 className="text-4xl font-bold mb-4">Why Us?</h3> {/* Heading for Why Us */}
          <p className="text-xl"> {/* Increased font size */}
            Whether you are a startup looking for innovative solutions or an established business aiming for growth, we have the expertise to help you succeed.
          </p>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot" className="chatbot min-h-screen bg-white text-black flex justify-center items-center">
        <div className="max-w-[1248px] w-full px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Meet Our Chatbot</h2>
          <p className="text-xl mb-6"> {/* Increased font size */}
            Our intelligent chatbot is here to assist you 24/7. Whether you have questions about our services or need help navigating our website, our chatbot provides instant support.
          </p>
          <p className="text-xl mb-6"> {/* Increased font size */}
            With advanced natural language processing capabilities, it understands your queries and delivers accurate responses in real-time.
          </p>
          <p className="text-xl mb-6"> {/* Increased font size */}
            Experience seamless communication and get the information you need without waiting. Our chatbot is designed to enhance your experience and ensure satisfaction.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq min-h-screen bg-white text-black flex justify-center items-center">
        <div className="max-w-[1248px] w-full px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md">
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
                {activeFAQ === index && (
                  <div className="p-6 pt-0 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;