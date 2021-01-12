const jwt = require('jsonwebtoken');

exports.validateToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    const decoded = jwt.verify(token, 'shhhh');
    if (decoded) {
      return next();
    }
  }
  return res.status(401).send({ auth: false, message: 'No token provided.' });
};
