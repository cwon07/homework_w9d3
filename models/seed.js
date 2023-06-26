// INSERT DATA ONTO MONGODB
const mongoose = require('./connection');
const animalData = require('./seedData');
const AnimalModel = require('./animal');

mongoose.connection.on('open', async () => {
    const scrubbedData = animalData.map( v => {
        return {
            name: v.name,
            img: v.img,
            species: v.species,
            extinct: v.extinct,
            location: v.location,
            lifeExpectancy: v.lifeExpectancy
        }
    });
    // DELETE ALL DATA IN DB
    await AnimalModel.deleteMany({});
    // INSERT SCRUBBED DATA INTO DB
    await AnimalModel.create(scrubbedData);
    // CLOSE OUT CONNECTION
    mongoose.connection.close();
})