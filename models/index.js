const mongoose = require('mongoose');
require('dotenv').config()
//const db = require('../config/key').mongoURI;
const db = process.env.DATABASE_URL;
mongoose.set('debug', true);
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB CONNECTED...'))
.catch(err => console.log(err));


module.exports.Joke = require('./joke');