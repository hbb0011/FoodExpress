
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/restaurants', restaurantRoutes);

// Connect to MongoDB
connectDB();

// Test 
app.get('/', (req, res) => {
    res.send('Welcome to FoodExpress API!!');
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
