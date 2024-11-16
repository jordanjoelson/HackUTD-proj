import React, { useState } from 'react';

const FAQ = () => {
  // State to manage which question is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is borrowing against crypto?",
      answer: "Borrowing against crypto allows you to use your cryptocurrency as collateral to obtain a loan without selling your assets."
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by creating an account on our website and completing the verification process."
    },
    {
      question: "What cryptocurrencies can I use?",
      answer: "We support a variety of cryptocurrencies including Bitcoin, Ethereum, and more. Check our website for the full list."
    },
    {
      question: "What are the fees associated with borrowing?",
      answer: "Fees may vary based on the loan amount and terms. Please refer to our fee schedule for detailed information."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1248px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left font-bold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span> {/* Toggle icon */}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">{item.answer}</div> // Show answer if open
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;