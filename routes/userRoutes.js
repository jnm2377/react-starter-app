const express    = require('express');
const User       = require('../models/user.js');
const router = express.Router();


//GET ALL -need to populate
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(200).json({err: e.message});
  }
});

//GET ONE -need to populate
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(200).json({err: e.message});
  }
});

//CREATE - (Register)
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.user = newUser;
    res.status(200).json(newUser);
  } catch (e) {
    res.status(400).json({err: e.message});
  }
});

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    req.session.user = user;
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(400).json({err: e.message});
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    // await Badge.remove({user: deletedUser._id});
    req.session.destroy();
    res.status(200).json({message: 'User, and all user data deleted.'});
  } catch (e) {
    res.status(400).json({err: e.message});
  }
});


module.exports = router;
