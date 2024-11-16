import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./components/navbar"; // Ensure correct casing
import Home from "./pages/home"; // Ensure correct casing

function App() {
  return (
    <BrowserRouter> {/* Wrap everything in BrowserRouter */}
      <div className="App">
        <Navbar /> {/* Add Navbar here once */}
        <Home />   {/* Display Home content */}
      </div>
    </BrowserRouter>
  );
}

export default App;