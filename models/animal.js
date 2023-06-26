const mongoose = require('./connection');

const animalSchema = new mongoose.Schema({
    name: String,
    img: String,
    species: String,
    extinct: Boolean,
    location: [String],
    lifeExpectancy: Number
})

const AnimalModel = mongoose.model('animal', animalSchema);

module.exports = AnimalModel;