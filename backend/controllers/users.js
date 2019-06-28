const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/Users')

module.exports = {

  post: async (req, res) => {
    const { email, password } = req.body;
    // Simple validation
    if(!email || !password) {return res.status(400).json({error: 'Please enter all fields', success:false})}
    // Check for existing user
    const user = await User.findOne({ email })
    if(user) {return res.status(404).json({error: 'User Already Exists', success:false})}
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      location: {
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
      },
      stats: {
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight
      }
    });
    // Create salt & hashed Password
    bcrypt.genSalt(10, (err,salt) => {
      bcrypt.hash(newUser.password, salt, async (err,hash) => {
        if (err) throw err;
        newUser.password = hash
        await newUser.save()
        jwt.sign({id: newUser.id}, config.get('jwtSecret'), {expiresIn: 3600}, (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user: newUser,
            success: true
          })
        })
      })
    })
  }

}
