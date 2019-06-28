const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken')

// const User = require('../models/Users')
const UsersController = require('../controllers/users')

// router.post('/', (req, res) => {
//   const { email, password } = req.body;
//   // Simple validation
//   if(!email || !password) {
//     return res.status(400).json({ msg: 'Please enter all fields' });
//   }
//   // Check for existing user
//   User.findOne({ email: email })
//     .then(user => {
//       if(user) return res.status(400).json({ msg: 'User already exists' });
//       const newUser = new User({
//         email: req.body.email,
//         password: req.body.password,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         birthday: req.body.birthday,
//         location: {
//           city: req.body.city,
//           state: req.body.state,
//           country: req.body.country
//         },
//         stats: {
//           gender: req.body.gender,
//           height: req.body.height,
//           weight: req.body.weight
//         }
//       });
//
//       // Create salt & hash
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if(err) throw err;
//           newUser.password = hash;
//           newUser.save()
//             .then(user => {
//               jwt.sign(
//                 { id: user.id },
//                 config.get('jwtSecret'),
//                 { expiresIn: 3600 },  //60 minute inactivity logout
//                 (err, token) => {
//                   if(err) throw err;
//                   res.json({
//                     token,
//                     user: {
//                       id: user.null,
//                       email: user.email
//                     }
//                   });
//                 }
//               )
//             });
//         })
//       })
//     })
// })

router.route('/')
  .post(UsersController.post)

module.exports = router;
