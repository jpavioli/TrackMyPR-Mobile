const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const ScoresController = require('../controllers/scores')

// const Score = require('../models/Scores')
// const User = require('../models/Users')
// const Workout = require('../models/Workouts')
//
// router.get('/', (req,res) => {
//   Score.findAll()
//     .then(scores => res.json(scores))
// })
//
// router.get('/:id', (req,res) => {
//   Score.findByPk(req.params.id)
//     .then(score => res.json(score))
//     .catch(err => res.status(500).json({ success: false }));
// })
//
// router.post('/', auth, async (req,res) => {
//   const user = await User.findById(req.user.id)
//   const workout = await Workout.findById(req.body.workout)
//   const newScore = req.body
//   delete newScore.workout
//   const score = new Score(newScore)
//   score.user = user
//   score.workout = workout
//   await score.save()
//   user.scores.push(score)
//   await user.save()
//   workout.scores.push(score)
//   await workout.save()
//   res.status(200).json(score)
// })
//
// //UPDATE THIS TO AWAIT
// router.patch('/:id', auth, (req,res) => {
//   Score.findById(req.params.id)
//     .then(score => req.user._id === score.user._id ? score.update(req.body) : res.status(401).json({ success: false }))
//     .then(score => res.json(score))
//     .catch(err => res.status(500).json({ success: false }));
// })
//
//
// //UPDATE THIS TO AWAIT
// router.delete('/:id', auth, (req,res) => {
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
// })

router.route('/')
  .get(ScoresController.get)
  .post(auth,ScoresController.post)

router.route('/:id')
  .get(ScoresController.getById)
  .patch(auth,ScoresController.patch)
  .delete(auth,ScoresController.delete)

module.exports = router;
