const Score = require('../models/Scores')
const User = require('../models/Users')
const Workout = require('../models/Workouts')

module.exports = {

  get: async (req,res) => {
    let scores = await Score.find({})
    res.status(200).json({scores,success:true})
  },

  getById: async (req,res) => {
    let score = await Score.findById(req.params.id)
    if (!score) {return res.status(404).json({error: 'Score Does Not Exist', success:false})}
    res.status(200).json({score,success:true});
  },

  post: async (req,res) => {
    if (!req.user.id || !req.body.workout) {return res.status(404).json({error: 'Score Must Belong to a Workout and a User', success:false})}
    const user = await User.findById(req.user.id)
    const workout = await Workout.findById(req.body.workout)
    const newScore = req.body
    delete newScore.workout
    const score = new Score(newScore)
    score.user = user
    score.workout = workout
    await score.save()
    user.scores.push(score)
    await user.save()
    workout.scores.push(score)
    await workout.save()
    res.status(200).json(score)
  },

  patch: async (req,res) => {
    const newScore = req.body
    const result = await Score.findByIdAndUpdate(req.params.id,newScore)
    res.status(200).json({success:true})
  },

  delete: async (req,res) => {
    console.log('here')
    const score = await Score.findById(req.params.id)
    if(!score) {return res.status(404).json({error: 'Score Does Not Exist',success: false})}
    const user = await User.findById(score.user.id)
    const workout = await Workout.findById(score.workout.id)
    await score.remove()
    user.scores.pull(score)
    await user.save()
    workouts.scores.pull(score)
    await workouts.save()
    res.status(200).json({success:true})

  //   Score.findByPk(req.params.id)
  //     .then(score => {
  //       if(!score){return res.status(404).json({success: false})}
  //       if(req.user._id === score.user._id) {
  //         User.findByPk(score.user._id)
  //           .then(user => {
  //             user.scores.pull(score)
  //             user.save()
  //           .catch(err => res.status(500).json({success: false}))
  //           })
  //         Workout.findByPk(score.workout._id)
  //           .then(workout => {
  //             workout.scores.pull(score)
  //             workout.save()
  //           })
  //           .catch(err => res.status(500).json({success: false}))
  //         score.destroy()
  //       }
  //       else {res.status(401).json({ success: false })}
  //     })
  //     .then(() => res.json({ success: true }))
  //     .catch(err => res.status(500).json({ success: false }));
  }

}
