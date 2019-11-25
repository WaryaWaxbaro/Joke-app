const mongoose = require('mongoose');
const db = require('../config/key').mongoURI;
mongoose.set('debug', true);
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB CONNECTED...'))
.catch(err => console.log(err));


module.exports.Joke = require('./joke');