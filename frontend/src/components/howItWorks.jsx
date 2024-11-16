import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1248px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Step 1: Sign Up</h3>
            <p className="text-gray-600">Create an account and verify your identity to get started.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Step 2: Deposit Crypto</h3>
            <p className="text-gray-600">Deposit your cryptocurrency into our secure wallet.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Step 3: Borrow Funds</h3>
            <p className="text-gray-600">Borrow against your crypto assets with flexible terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;