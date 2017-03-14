var express = require('express');
var mongoose = require('mongoose');
var path    = require("path");
var app = express();


var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.set('view engine', 'jade');

// require('./config/middleware.js')(app, express);
// require('./config/routes.js')(app, express);

// start listening to requests on port 8000
var port = process.env.PORT || 1337;

app.listen(port);

console.log("Now listening to port" + port);
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../public/index.html'));
  //__dirname : It will resolve to your project folder.
});


// export our app for testing and flexibility, required by index.js
module.exports = app;