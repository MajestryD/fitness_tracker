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

});

// login
router.route('/login').post(async(req,res)=>{
  const name = req.body.name;
  const graphDomain = req.body.graphDomain;
  const domainId = req.body.domainId;

  await User.findOne({'graphDomain':graphDomain, 'domainId' : domainId})
  .then(user => {
    if(user == null){
      const newUser = new User({
        name,
        graphDomain,
        domainId
      });
      newUser.save();
      req.session.userName = name ;
      console.log(req.session);
      res.send(req.session);
      console.log('everything done here');
    }else{
      req.session.userName = name ;
      console.log(req.session);
      res.send(req.session);
      console.log('everything done here 2');
    }
  })
  .catch(error => res.status(400).json('Error: ' + error));
})

//logOut
router.route('/logout').post((req,res)=>{
  req.session.destroy();
  res.send(req.session);
  res.clearCookie('connect.sid');
  console.log('session destroyed');
})

router.route('/delete/:domainId').delete(async(req,res)=>{
  await User.findOneAndDelete({'domainId': req.params.domainId})
  .then(user => res.json(user.name + ' has been deleted'))
  .catch(error => res.status(400).json('Error: '+ error));
})



module.exports = router;
