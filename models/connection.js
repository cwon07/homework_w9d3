require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection
    .on('open', () => console.log(`Connected to mongoose`))
    .on('close', () => console.log(`Disconnected from mongoose`))
    .on('error', () => console.log(`Mongoose error`))

module.exports = mongoose;