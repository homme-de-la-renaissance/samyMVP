var express = require('express');
var mongoose = require('mongoose');
var path    = require("path");
var app = express();
// var gzippo = require('gzippo');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use(gzippo.staticGzip(__dirname + '/public'));

mongoose.connect('mongodb://localhost/mvp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database');
});


var port = process.env.PORT || 1337;

app.listen(port);

console.log("Now listening to port" + port);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/signup.html'));
});

app.get('/analytics',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/analytics.html'));
});

app.get('/signIn',function(req,res) {
  res.sendFile(path.join(__dirname+'/../public/signin.html'));
});


// export our app for testing and flexibility, required by index.js
module.exports = app;