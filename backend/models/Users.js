const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email:  String,
  password: String,
  firstName:   String,
  lastName: String,
  birthday: Date,
  location: {
    city: String,
    state: String,
    country: String
  },
  stats: {
    gender: String,
    height: Number,
    weight: Number
  },
  scores: [{
    type: Schema.Types.ObjectId,
    ref: 'score'
  }]
});

const User = mongoose.model('user', userSchema)
module.exports = User
