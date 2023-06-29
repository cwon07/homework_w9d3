const mongoose = require('./connection');
const Animal = require('./animals');

mongoose.connection.on('open', async (req, res) => {
    await Animal.deleteMany({});

const startAnimals = [
    {
        name: "Aardvark",
        img:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTKaqt2Y9cHAd2h9HdziG9aLBqbwglMfdPxJf3-1N1DmXwIxqBHPa8Iwvj-T0wPtGMgb3Vfs54GjmCqQ3g",
        species: "Mammal",
        extinct: false,
        location: "Africa",
        lifeExpectancy: 23
    },
    {
        name: "Blue-Footed Booby",
        img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTe8ydHvPLeg05XpZiFvqWUxUY3KnkaWrgy-YM4ccsWVIQtdWeABJVgbvXdh8XZtjVbuGpBAqvk99H_k2s",
        species: "Bird",
        extinct: false,
        location: "Central America",
        lifeExpectancy: 17
    },
    {
        name: "California Sea Lion",
        img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcShhts0nixkYnI_vuaYNJU4oPotomjmfB95rxi_U2f0J-vrU4EKCdZTyomCwGLVEhRYXcCJQ7w2iaLj7GI",
        species: "Mammals",
        extinct: false,
        location: "North America",
        lifeExpectancy: 30
    }
];
await Animal.create(startAnimals);

mongoose.connection.close();
})