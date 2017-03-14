var express = require('express');
var mongoose = require('mongoose');
var path    = require("path");
var app = express();
var gzippo = require('gzippo');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.use(gzippo.staticGzip('' + __dirname + '/../public/app'));

var port = process.env.PORT || 1337;

app.listen(port);

console.log("Now listening to port" + port);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/signup.html'));
});


// export our app for testing and flexibility, required by index.js
module.exports = app;