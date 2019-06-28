const Workout = require('../models/Workouts')

module.exports = {

  get: (req,res) => {
    Workout.findAll()
      .then(workouts => res.json(workouts))
  },

  getById: (req,res) => {
    Workout.findById(req.params.id)
      .then(workout => res.json(workout))
      .catch(err => res.status(500).json({ success: false }));
  },

  post: (req,res) => {
    Workout.create({...req.body, userId:req.user.id})
      .then(workout => res.json(workout))
      .catch(err => res.status(500).json({ success: false }));
  },

  patch: (req,res) => {
    Workout.findById(req.params.id)
      .then(workout => req.user.id === workout.userId ? workout.update(req.body) : res.status(401).json({ success: false }))
      .then(workout => res.json(workout))
      .catch(err => res.status(500).json({ success: false }));
  },

  delete: (req,res) => {
    Workout.findById(req.params.id)
    .then(workout => req.user.id === workout.userId ? workout.destroy() : res.status(401).json({ success: false }))
      .then(() => res.json({ success: true }))
      .catch(err => res.status(500).json({ success: false }));
  },

}
