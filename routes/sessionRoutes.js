const express    = require('express');
const User       = require('../models/user.js');
const router = express.Router();

//VIEW SESSION USER
router.get('/', (req, res) => {
  try {
    res.status(200).json({user: req.session.user});
  } catch (err) {
    res.status(400).json({ seshErr: err.message });
  }
});

//CREATE SESSION
router.post('/login', async (req, res) => {
   try {
     const userFromDB = await User.findOne({ email: req.body.email });
     if (userFromDB.auth(req.body.password)) {
       let user = {};
       user._id = userFromDB._id;
       user.email = userFromDB.email;
       req.session.user = user;
       res.status(200).json(user);
     } else {
       res.status(403).json({ err: 'Password does not match what we have...' })
     }
   } catch (err) {
     console.log(err);
     res.status(400).json({ err: err.message });
   }
});

//DESTROY SESSION
router.delete('/logout', (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ message: 'Session destroyed'});
  });
});

module.exports = router;
