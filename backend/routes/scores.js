const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ScoresController = require('../controllers/scores')

router.route('/')
  .get(ScoresController.get)
  .post(auth,ScoresController.post)

router.route('/:id')
  .get(ScoresController.getById)
  .patch(auth,ScoresController.patch)
  .delete(auth,ScoresController.delete)

router.route('/user/:id')
  .get(ScoresController.getByUserId)

router.route('/workout/:id')
  .get(ScoresController.getByWorkoutId)

module.exports = router;
