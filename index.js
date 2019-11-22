const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = process.env.PORT || 3000;

const jokeRoutes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/jokes/api/', jokeRoutes);

app.get('/', (req, res) => {
  res.send('HELLO FROM EXPRESS');
});



app.listen(PORT, () => console.log('Application is connected', PORT));