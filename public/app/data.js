var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  grade: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('data', DataSchema);
