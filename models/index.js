const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/joke-api', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB CONNECTED...'))
.catch(err => console.log(err));


module.exports.Joke = require('./joke');