require('dotenv').config();
const express = require('express');
const animalRoutes = require('./controllers/animalRoutes')
const app = express();

app.use(express.json());
app.use(animalRoutes);
const PORT = process.env.PORT

app.listen(PORT, 
    () => {console.log(`Listening to port${PORT}`)
})