import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure this import is correct
import App from './App';
import './index.css'; // Optional: Import global styles

// Ensure that 'app' exists in your HTML file
const root = ReactDOM.createRoot(document.getElementById('app')); // This must match the ID in index.html
root.render(<App />);