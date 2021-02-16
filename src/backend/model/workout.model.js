const mongoose = require('mongoose');
const User = require('./user.model');
const Schema = mongoose.Schema;



const workoutSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  theme:{
    type:String,
    required:true
  },
  exerciseSet:[{
    exerciseName:String,
    numberOfReps:Number,
    totalCalorie:Number
  }]

});

const Workout = mongoose.model('Workout',workoutSchema);
module.exports = Workout;
