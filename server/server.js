var express = require('express');
var mongoose = require('mongoose');
var path    = require("path");
var app = express();
var handler = require('./request-handler.js');

// var gzippo = require('gzippo');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
// app.use('../node_modules', express.static(__dirname + '/../node_modules'));
// app.use('/../public/app/', express.static(__dirname + '/../public/app/'));


// app.use(gzippo.staticGzip(__dirname + '/public'));

mongoose.connect('mongodb://localhost/mvp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database');
});


var handler = require('./requestHandler.js');

var port = process.env.PORT || 1337;

app.listen(port);

console.log("Now listening to port" + port);



module.exports = app;