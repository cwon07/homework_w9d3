// IMPORT DEPENDENCIES & SETUP
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT;
const methodOverride = require('method-override');
const app = express();
const animalsRouter = require('./controllers/animals');
const Animals = require('./models/animals');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(animalsRouter);
app.use(express.json());

// LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})