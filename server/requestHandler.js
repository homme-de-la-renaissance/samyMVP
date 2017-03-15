var db = require('../db/config');
var Grades = require('../db/models/Phrases.js');
var Entries = require('../db/models/Entries.js');

exports.getGrades = function(req, res) {
  Grades.find({})
    .exec(function(err, grades) {
      if (!grades) {
        return console.log('no grades found');
      }
      res.status(200).send(grades);
    });
};

exports.postGrades = function(req, res) {
  new Grades(req.body).save(function(err) {
    if (err) {
      return console.log('error', err);
    }
    res.status(201).send('Successfully added');
  });
};

exports.redirect = function(req, res) {
  res.redirect('/#/');
};