const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = process.env.PORT || 3000;

const jokeRoutes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/jokes/api/', jokeRoutes);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log('Application is connected', PORT));