const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/Users')

module.exports = {

  post: async (req, res) => {
    const { email, password } = req.body;
    // Simple validation
    if(!email || !password) {return res.status(400).json({message:'Please enter an Email and Password',success:false});}
    // Check for existing user
    const user = await User.findOne({ email })
    if(!user) return res.status(400).json({message:'User Does not exist',success:false})
    // Validate password
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({message: 'Invalid credentials',success:false});
    jwt.sign(
      { id: user.id },
      config.get('jwtSecret'),
      { expiresIn: 3600 },
      (err, token) => {
        if(err) throw err;
        res.status(200).json({
          token,
          user,
          success: true
        });
      }
    )
  },

  get: async (req, res) => {
    const user = await User.findById(req.user.id)
    if(!user) return res.status(400).json({message:'User Does not exist',success:false})
    res.status(200).json({user,success:true})
  }
}
