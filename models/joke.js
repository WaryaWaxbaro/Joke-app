const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  joke:{
    type: String
  },
  name: {
    type: String,
    required: 'Name cannot be blank'
  },
  created_date: {
    type: Date,
    default: new Date()
  }
});

const Joke = mongoose.model('Joke', jokeSchema);


module.exports = Joke;
