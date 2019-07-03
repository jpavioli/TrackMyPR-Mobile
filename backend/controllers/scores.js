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
    let score = new Score(newScore)
    // user.scores.push(score)
    workout.scores.push(score)
    // await user.save()
    await workout.save()
    score.workout = workout
    score.user = user
    await score.save()
    res.status(200).json({score,success:true})
  },

  patch: async (req,res) => {
    const newScore = req.body
    let score = await Score.findById(req.params.id)
    if (!score) {return res.status(500).json({message:'Workout does not exist',success:false})}
    if (score.userId !== req.user.id) {return res.status(401).json({ message: 'Unauthrized User',success: false })}
    await score.updateOne(newScore)
    res.status(200).json({score:{...score._doc,...newScore},success:true})
  },

  delete: async (req,res) => {
    const score = await Score.findById(req.params.id)
    if(!score) {return res.status(404).json({error: 'Score Does Not Exist',success: false})}
    let id = score.id
    const user = await User.findById(score.user.id)
    const workout = await Workout.findById(score.workout.id)
    await score.remove()
    user.scores.pull(score)
    await user.save()
    workouts.scores.pull(score)
    await workouts.save()
    res.status(200).json({id,success:true})
  },

  getByUserId: async (req,res) => {
    const scores = await Score.find({user: {_id: req.params.id}})
    if (scores.length === 0) {return res.status(404).json({error: 'User has no logged Scores',success: false})}
    res.status(200).json({scores,success:true})
  },

  getByWorkoutId: async (req,res) => {
    const scores = await Workout.find({workout: {_id: req.params.id}})
    if (scores.length === 0) {return res.status(404).json({error: 'Wokout has no logged Scores',success: false})}
    res.status(200).json({scores,success:true})
  }

}
