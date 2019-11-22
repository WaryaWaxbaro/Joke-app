const express = require('express'),
      router = express.Router();


const db = require('../models');

//Gets all Jokes
router.get('/', (req, res) => {
  db.Joke.find()
  .then(joke => res.json(joke))
  .catch(err => res.send(err));
});

//Add a joke
router.post('/', (req, res) => {
  db.Joke.create(req.body)
  .then(newJoke => res.status(201).json(newJoke))
  .catch(err => res.send(err));
});

//Get a single Joke
router.get('/:jokeId', (req, res) => {
  db.Joke.findById(req.params.jokeId)
  .then(foundJoke => res.json(foundJoke))
  .catch(err => res.send(err));
});

//Updata a Joke
router.put('/:jokeId', (req, res) => {
  db.Joke.updateOne({_id: req.params.jokeId}, req.body, {new: true})
  .then(updatedJoke => res.json(updatedJoke))
  .catch(err => res.send(err));
});

//Delete a Joke
router.delete('/:jokeId', (req, res) => {
  db.Joke.deleteOne({_id: req.params.jokeId})
  .then(() => res.json({message: 'item deleted'}))
  .catch(err => res.send(err));
});

module.exports = router;