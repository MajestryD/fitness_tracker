const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  description:{
    type:String,
    required: true,
    maxLength:256
  }
});

const Exercise = mongoose.model('Exercise',exerciseSchema);

module.exports = Exercise;