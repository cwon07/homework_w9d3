// IMPORT THE CONNECTION FILE
const mongoose = require('./connection');

//SCHEMA SETUP
const animalSchema = new mongoose.Schema({
    name: String,
    img: String,
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
});

const Animals = mongoose.model('animal', animalSchema);

module.exports = Animals;
