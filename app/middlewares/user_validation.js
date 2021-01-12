const jwt = require('jsonwebtoken');

exports.validateToken = (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    const decoded = jwt.verify(token, 'shhhh');
    if (decoded) {
      return next();
    }
  }
  return res.status(401).send({ auth: false, message: 'No token provided.' });
};
