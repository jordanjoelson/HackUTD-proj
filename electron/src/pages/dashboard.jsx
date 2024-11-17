import React, { useState } from "react";

const GraphPlaceholder = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 flex items-center justify-center">
      <p className="text-gray-500">Graph Placeholder</p>
    </div>
  );
};

const ProductComparisonTool = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const plans = [
    { id: 1, name: "Fiber 1 Gig", price: "$70/month", features: ["High speed", "Unlimited data", "Free installation"] },
    { id: 2, name: "Fiber 2 Gig", price: "$90/month", features: ["Higher speed", "Unlimited data", "Free installation", "Priority support"] },
    { id: 3, name: "Basic DSL", price: "$50/month", features: ["Moderate speed", "Limited data", "Standard support"] }
  ];

  const togglePlanSelection = (planId) => {
    setSelectedPlans((prev) =>
      prev.includes(planId) ? prev.filter(id => id !== planId) : [...prev, planId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Product Comparison Tool</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map(plan => (
          <div key={plan.id} className={`border rounded-lg p-4 ${selectedPlans.includes(plan.id) ? 'bg-blue-100' : 'bg-white'}`}>
            <h4 className="font-semibold text-lg">{plan.name}</h4>
            <p className="text-md">{plan.price}</p>
            <ul className="list-disc list-inside">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button 
              onClick={() => togglePlanSelection(plan.id)} 
              className={`mt-2 px-4 py-2 rounded ${selectedPlans.includes(plan.id) ? 'bg-red-500' : 'bg-green-500'} text-white`}
            >
              {selectedPlans.includes(plan.id) ? 'Deselect' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      {selectedPlans.length > 0 && (
        <div className="mt-6">
          <h4 className="font-bold text-lg">Selected Plans:</h4>
          <ul className="list-disc list-inside">
            {plans.filter(plan => selectedPlans.includes(plan.id)).map(plan => (
              <li key={plan.id}>{plan.name} - {plan.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SmartSearchAndFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);

  const plans = [
    { id: 1, name: "Fiber 1 Gig", price: "$70/month" },
    { id: 2, name: "Fiber 2 Gig", price: "$90/month" },
    { id: 3, name: "Basic DSL", price: "$50/month" },
    // Add more plans as needed
  ];

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    
    // Filter plans based on search term
    const results = plans.filter(plan =>
      plan.name.toLowerCase().includes(term)
    );
    
    setFilteredPlans(results);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Smart Search and Filter</h3>
      <input 
        type="text" 
        placeholder="Search for plans..." 
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
      />
      
      <h4 className="font-semibold mb-2">Filtered Plans:</h4>
      <ul className="list-disc list-inside">
        {(filteredPlans.length > 0 ? filteredPlans : plans).map(plan => (
          <li key={plan.id} className="mb-1">{plan.name} - {plan.price}</li>
        ))}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center p-6 relative">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[#FF0037]/15 rounded-full blur-[120px] z-0" />
      
      <div className="max-w-[1248px] w-full z-10 relative">
        {/* Updated Header */}
        <h2 className="text-sm font-semibold mb-1">
          pages <span className="font-bold">/ Dashboard</span>
        </h2>
        <h3 className="text-lg font-bold mb-6">Dashboard</h3>

        {/* Subscription Overview */}
        <h3 className="text-2xl font-semibold mb-4">Subscription Overview</h3>
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <p>Active Plans: Basic Plan</p>
          <p>Cost: $10/month</p>
        </div>

        {/* Usage Metrics */}
        <h3 className="text-2xl font-semibold mb-4">Usage Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-bold text-xl mb-2">Internet Speed</h4>
            <GraphPlaceholder />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-bold text-xl mb-2">Data Usage</h4>
            <GraphPlaceholder />
          </div>
        </div>

        {/* Recommendations History */}
        <h3 className="text-2xl font-semibold mb-4">Recommendations History</h3>
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <GraphPlaceholder />
          <p className="mt-4 text-gray-500">Previously recommended products will be displayed here.</p>
        </div>

        {/* Smart Search and Filter Section */}
        <SmartSearchAndFilter />

        {/* Product Comparison Tool Section */}
        <ProductComparisonTool />
      </div>
    </section>
  );
};

export default Dashboard;