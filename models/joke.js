const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  joke:{
    type: String
  },
  name: {
    type: String,
    required: 'Name cannot be blank'
  },
  created_data: {
    type: Date,
    default: Date.now
  }
});

const Joke = mongoose.model('Joke', jokeSchema);


module.exports = Joke;
