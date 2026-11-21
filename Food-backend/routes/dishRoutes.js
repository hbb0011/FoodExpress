
const express = require('express');
const router = express.Router();

const Dish = require('../models/Dish');
const Category = require('../models/Category');
const Restaurant = require('../models/Restaurant');
// Get all dishes belonging to one restaurant
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const { restaurantId } = req.params;

        const dishes = await Dish.find({
            restaurant: restaurantId
        })
        .populate('categorie')
        .populate('restaurant')
        .sort({ nom: 1 });

        res.status(200).json(dishes);

    } catch (error) {
        console.error('Error fetching restaurant dishes:', error);

        res.status(500).json({
            message: 'Error fetching dishes',
            error: error.message
        });
    }
});

module.exports = router;
