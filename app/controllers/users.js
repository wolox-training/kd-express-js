const { signup } = require('../services/users');
const { crypt } = require('../helpers');

exports.users = (req, res, next) => {
  req.body.password = crypt(req.body.password);
  signup(req.body)
    .then(sign => res.status(200).send(sign))
    .catch(next);
};
