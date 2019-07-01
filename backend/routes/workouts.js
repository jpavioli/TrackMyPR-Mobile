const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const WorkoutController = require('../controllers/workouts')

router.route('/')
  .get(WorkoutController.get)
  .post(auth,WorkoutController.post)

router.route('/:id')
  .get(WorkoutController.getById)
  .patch(auth,WorkoutController.patch)
  .delete(auth,WorkoutController.delete)

router.route('/user/:id')
  .get(WorkoutController.getByUserId)

module.exports = router;
