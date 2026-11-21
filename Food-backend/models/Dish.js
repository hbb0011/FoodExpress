const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    prix: {
        type: Number,
        required: true
    },

    image: {
        type: String
    },

    disponible: {
        type: Boolean,
        default: true
    },

    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
});

module.exports = mongoose.model('Dish', dishSchema);