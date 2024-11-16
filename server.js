// Import the required libraries
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB URI if using a cloud instance like Atlas)
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

// Define a Schema for User Data
const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  shippingAddress: {
    address: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  purchaseHistory: [
    {
      orderID: String,
      productID: String,
      quantity: Number,
      totalPrice: Number,
      orderDate: Date,
      shippingStatus: String,
    },
  ],
  paymentDetails: {
    paymentMethod: String,
    paymentStatus: String,
    paymentDate: Date,
  },
});

// Create a Mongoose model based on the user schema
const User = mongoose.model('User', userSchema);

// Route to create a new user
app.post('/user', async (req, res) => {
  const { userID, username, fullName, email, shippingAddress, purchaseHistory, paymentDetails } = req.body;

  const newUser = new User({
    userID,
    username,
    fullName,
    email,
    shippingAddress,
    purchaseHistory,
    paymentDetails,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

// Route to get a user by their userID
app.get('/user/:userID', async (req, res) => {
  try {
    const user = await User.findOne({ userID: req.params.userID });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
