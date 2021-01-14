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
  let offset = 0;
  let lim = 10;

  if (req.query.limit && req.query.page) {
    offset = Math.ceil(0 + [(req.query.page - 1) * req.query.limit]);
    lim = req.query.limit;
  }
  getusers(lim, offset)
    .then(user => res.status(200).send(user))
    .catch(next);
};
