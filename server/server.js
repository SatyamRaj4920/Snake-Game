require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (replace with your Atlas URI in .env)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/clothing_marketplace';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Clothing Marketplace API is running' });
});

// Placeholder products route
app.get('/api/products', (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Classic White Tee', price: 29, category: 'T-Shirts' },
      { id: 2, name: 'Slim Fit Jeans', price: 59, category: 'Pants' },
      { id: 3, name: 'Summer Dress', price: 49, category: 'Dresses' },
    ],
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
