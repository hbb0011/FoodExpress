
const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurant');

// GET all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
