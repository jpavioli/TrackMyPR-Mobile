const Workout = require('../models/Workouts')
const Score = require('../models/Scores')
const User = require('../models/Users')

module.exports = {

  get: async (req,res) => {
    let workouts = await Workout.find({})
    res.status(200).json({workouts,success:true})
  },

  getById: async (req,res) => {
    let workout = await Workout.findById(req.params.id)
    if (!workout) {return res.status(500).json({message:'Workout does not exist',success:false})}
    res.status(200).json({workout,success:true})
  },

  post: async (req,res) => {
    if (!req.user.id) {return res.status(404).json({error: 'Workout Must Belong to a User', success:false})}
    let newWorkout = await Workout.create({...req.body, userId:req.user.id})
    res.status(200).json({workout:newWorkout,success:true})
  },

  patch: async (req,res) => {
    let newWorkout = req.body
    let workout = await Workout.findById(req.params.id)
    if (!workout) {return res.status(500).json({message:'Workout does not exist',success:false})}
    if (workout.userId !== req.user.id) {return res.status(401).json({ message: 'Unauthrized User',success: false })}
    await workout.updateOne(newWorkout)
    res.status(200).json({workout:{...workout._doc,...newWorkout},success:true})
  },

  delete: async (req,res) => {
    let workout = await Workout.findById(req.params.id)
    if (!workout) {return res.status(500).json({message:'Workout does not exist',success:false})}
    let id = workout.id
    if (workout.userId !== req.user.id) {return res.status(401).json({ message: 'Unauthrized User',success: false })}
    await Score.deleteMany({workout: workout.id})
    await workout.remove()
    res.status(200).json({id,success:true})
  },

  getByUserId: async (req,res) => {
    const workouts = await Workout.find({userId: {_id: req.params.id}})
    if (workouts.length === 0) {return res.status(404).json({error: 'User has not Created any Workouts',success: false})}
    res.status(200).json({workouts,success:true})
  },

}
