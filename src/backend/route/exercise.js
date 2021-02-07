const router = require('express').Router();
let Exercise = require('../model/exercise.model');

// Get all exercise
router.route('/').get(async(req,res)=>{
  await Exercise.find()
  .then(exercise => res.json(exercise))
  .catch(error => res.status(400).json('Error' + error));
})

// Add exercise
router.route('/add').post((req, res)=>{
  const name = req.body.name;
  const description = req.body.description;

  const newExercise = new Exercise({
    name,
    description
  });

  newExercise.save()
  .then(exercise => res.json(exercise))
  .catch(error => res.status(400).json('Error: '+ error));

})

// Delete exercise
router.route('/delete/:name').delete(async (req,res)=>{
  await Exercise.findOneAndDelete({'name': req.params.name})
  .then(exercise => res.json(exercise.name + ' has been deleted'))
  .catch(error => res.status(400).json('Error '+ error));
})

//Find exercise by name
router.route('/:name').get(async(req,res)=>{
  await Exercise.findOne({'name': req.params.name})
  .then(exercise => res.json(exercise))
  .catch(error => res.status(400).json('Error '+ error));
})



module.exports = router;
