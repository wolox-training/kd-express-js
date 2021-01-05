const { signup } = require('../services/users');
const { crypt } = require('../helpers');

exports.users = (req, res, next) => {
  req.body.password = crypt(req.body.password);
  signup(req.body)
    .then(user => res.status(201).send(user))
    .catch(next);
};

exports.middleTest = (req, res) => {
  res.send('Hola mundo');
};
