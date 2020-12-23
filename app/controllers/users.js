const bcrypt = require('bcrypt');
const { signup } = require('../services/userService');

exports.signup = (req, res) => {
  if (req.body) {
    signup(req.body)
      .then(sign => res.status(200).send(sign))
      .catch(err => err);
  } else res.status(400);
};
