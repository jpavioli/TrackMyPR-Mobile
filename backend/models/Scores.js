const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var scoreSchema = new Schema({
	datePerformed: {type: Date, default: Date.now},
	location: String,
	results: String,
  weightUnits: String,
  rx: Boolean,
  modifications: String,
  comments: String,
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'workout'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
  })

const Score = mongoose.model('score', scoreSchema)
module.exports = Score
