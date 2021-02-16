const router = require('express').Router();
let Workout = require('../model/workout.model');

//Find all workouts in the database
router.route('/').get(async(req,res)=>{
  await Workout.find()
  .then(workout => res.json(workout))
  .catch(error => res.status(400).json('Error: '+ error));
});

//Find all workouts done by userId
router.route('/:id').get(async(req,res)=>{
  await Workout.find({"userId": req.params.id})
  .then(workout => res.json(workout))
  .catch(error => res.status(400).json('Error: '+ error));
})

//Add a workout
router.route('/add').post((req,res)=>{
  const userId = req.body.userId;
  const theme = req.body.theme;
  const set = req.body.exerciseSet;
  console.log(set);

  const newWorkout = new Workout({
    userId,
    theme
  });
  set.map(set => newWorkout.exerciseSet.push(set));
  newWorkout.save()
  .then(workout => res.json(workout))
  .catch(error => res.status(400).json('Error: ' + error));

});

//Delete a workout
router.route('/delete/:id').delete(async(req,res)=>{
  await Workout.findByIdAndDelete(req.params.id)
  .then( workout => res.json(workout))
  .catch(error => res.status(400).json('Error: '+ error))
})

module.exports = router;
