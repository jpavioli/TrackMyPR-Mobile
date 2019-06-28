const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const AuthController = require('../controllers/auth')

router.route('/')
  .post(AuthController.post)
  .get(auth,AuthController.get)

module.exports = router;
