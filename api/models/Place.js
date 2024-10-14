const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    title: String,
    address: String,
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuest: Number,
});

const PlaceModel = mongoose.model('place', placeSchema);
module.exports = PlaceModel;