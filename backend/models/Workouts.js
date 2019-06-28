const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var workoutsSchema = new Schema({
  warmup: String,
  name: String,
  description:	 String,
  format: String,
  coolDown: String,
  userId: String,
  scores:[{
    type: Schema.Types.ObjectId,
    ref: 'score'
  }]
})

const Workout = mongoose.model('workout', workoutsSchema)
module.exports = Workout
