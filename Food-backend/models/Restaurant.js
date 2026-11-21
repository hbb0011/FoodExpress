
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    adresse: {
        type: String,
        required: true
    },

    typeCuisine: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    horaires: {
        type: String
    },

    isOpen: {
        type: Boolean,
        default: true
    },

    fraisLivraison: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model('Restaurant', restaurantSchema);
