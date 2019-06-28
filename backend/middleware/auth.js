const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('auth-token');

  // Check for token
  if (!token)
    return res.status(401).json({message: 'No Token, Authorizaton Denied',success:false});
  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({message: 'Token is Not Valid', success:false});
  }
}

module.exports = auth;
