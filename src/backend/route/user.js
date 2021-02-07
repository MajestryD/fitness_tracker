const router = require('express').Router();
let User = require('../model/user.model');

//Find all users
router.route('/').get(async(req,res)=>{
  await User.find()
  .then(exercise => res.json(exercise))
  .catch(error => res.status(400).json('Error' + error));
})

//Add a user

router.route('/add').post((req, res)=>{
  const name = req.body.name;
  const graphDomain = req.body.graphDomain;
  const domainId = req.body.domainId;

  const newExercise = new User({
    name,
    graphDomain,
    domainId
  });

  newExercise.save()
  .then(exercise => res.json(exercise))
  .catch(error => res.status(400).json('Error: '+ error));

})

module.exports = router;
