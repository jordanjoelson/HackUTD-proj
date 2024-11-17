// src/App.jsx
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";  // Use HashRouter for Electron
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Navbar from './components/navbar.jsx'; // Ensure 'Navbar' is capitalized

export default function App() {
  return (
    <Router>
      <div className="min-h-screen max-h-full bg-zinc-950 text-white">
        <Navbar /> {/* Navbar should be capitalized */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}