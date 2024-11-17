import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#FF0037] text-white py-4">
      <div className="max-w-[1248px] w-full mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SmartCheck</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#faq" className="hover:underline">FAQs</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

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
      <Navbar />
      
      <section id="home" className="hero min-h-screen bg-white text-black flex justify-center items-center">
        <div className="max-w-[1248px] w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-6">Your journey to excellence starts here.</p>
            <button className="px-4 py-2 bg-[#FF0037] text-white rounded hover:bg-red-600 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="about-us min-h-screen bg-white text-black flex justify-center items-center">
        <div className="max-w-[1248px] w-full px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              We are dedicated to providing the best services and solutions to help you achieve your goals. Our team of experts is here to guide you every step of the way.
            </p>
            <p className="text-lg">
              With years of experience and a passion for excellence, we strive to exceed your expectations and deliver outstanding results.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="faq min-h-screen bg-white text-black flex justify-center items-center">
        <div className="max-w-[1248px] w-full px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 rounded-lg">
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