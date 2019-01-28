var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


mongoose.connect('mongodb://ralexandreessaiaws:Saj9VrY2dz2XWjGkPqUm@ds141654.mlab.com:41654/essaiaws', {}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Connexion DB OK !")
  }
} )

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app;
