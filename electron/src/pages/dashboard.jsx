// src/pages/Dashboard.jsx
import React from "react";

const GraphPlaceholder = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 flex items-center justify-center">
      <p className="text-gray-500">Graph Placeholder</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center p-6 relative">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[#FF0037]/15 rounded-full blur-[120px] z-0" />
      
      <div className="max-w-[1248px] w-full z-10 relative"> {/* Ensure this is above the blur */}
        {/* Updated Header */}
        <h2 className="text-sm font-semibold mb-1">
          pages <span className="font-bold">/ Dashboard</span>
        </h2>
        <h3 className="text-lg font-bold mb-6">Dashboard</h3>

        <h3 className="text-2xl font-semibold mb-4">Subscription Overview</h3>
        <div className="bg-white rounded-lg shadow-md p-4 mb-8"> {/* Solid white background */}
          <p>Active Plans: Basic Plan</p>
          <p>Cost: $10/month</p>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Usage Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4"> {/* Solid white background */}
            <h4 className="font-bold text-xl mb-2">Internet Speed</h4>
            <GraphPlaceholder />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4"> {/* Solid white background */}
            <h4 className="font-bold text-xl mb-2">Data Usage</h4>
            <GraphPlaceholder />
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Recommendations History</h3>
        <div className="bg-white rounded-lg shadow-md p-4"> {/* Solid white background */}
          <GraphPlaceholder />
          <p className="mt-4 text-gray-500">Previously recommended products will be displayed here.</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;