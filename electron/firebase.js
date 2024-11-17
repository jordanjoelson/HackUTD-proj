// Import the necessary modules from Firebase
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");  // Import for Firebase Storage if needed

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDaD9WJNgGME1u28yRT6bAFxdvcbgTckaQ",
  authDomain: "frontier-hackutd2024.firebaseapp.com",
  projectId: "frontier-hackutd2024",
  storageBucket: "frontier-hackutd2024.firebasestorage.app",
  messagingSenderId: "265767256655",
  appId: "1:265767256655:android:e865262a8d9aa06988a03a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Firebase Storage
const db = getFirestore(app);  // For Firestore
const storage = getStorage(app);  // For Firebase Storage (if you're using it)

// Export the services you're using
module.exports = { db, storage };
