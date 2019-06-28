const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// const Workout = require('../models/Workouts')
const WorkoutController = require('../controllers/workouts')

// router.get('/', (req,res) => {
//   Workout.findAll()
//     .then(workouts => res.json(workouts))
// })
//
// router.get('/:id', (req,res) => {
//   Workout.findByPk(req.params.id)
//     .then(workout => res.json(workout))
//     .catch(err => res.status(500).json({ success: false }));
// })
//
// router.post('/', auth, (req,res) => {
//   Workout.create({...req.body, userId:req.user.id})
//     .then(workout => res.json(workout))
//     .catch(err => res.status(500).json({ success: false }));
// })
//
// router.patch('/:id', auth, (req,res) => {
//   Workout.findByPk(req.params.id)
//     .then(workout => req.user.id === workout.userId ? workout.update(req.body) : res.status(401).json({ success: false }))
//     .then(workout => res.json(workout))
//     .catch(err => res.status(500).json({ success: false }));
// })
//
// router.delete('/:id', auth, (req,res) => {
//   Workout.findByPk(req.params.id)
//   .then(workout => req.user.id === workout.userId ? workout.destroy() : res.status(401).json({ success: false }))
//     .then(() => res.json({ success: true }))
//     .catch(err => res.status(500).json({ success: false }));
// })

router.route('/')
  .get(WorkoutController.get)
  .post(auth,WorkoutController.post)

router.route('/:id')
  .get(auth,WorkoutController.getById)
  .patch(auth,WorkoutController.patch)
  .delete(auth,WorkoutController.delete)

module.exports = router;
