const { signup, signin, getusers } = require('../services/users');
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

exports.userlist = (req, res, next) => {
  getusers()
    .then(user => res.status(200).send(user))
    .catch(next);
};
