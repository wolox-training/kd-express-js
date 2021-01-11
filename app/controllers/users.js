const { signup, signin } = require('../services/users');
const { crypt } = require('../helpers');

exports.users = (req, res, next) => {
  req.body.password = crypt(req.body.password);
  signup(req.body)
    .then(user => res.status(201).send(user))
    .catch(next);
};

exports.signin = (req, res, next) => {
  signin(req.body)
    .then(user => res.status(201).send(user))
    .catch(next);
};
