const { signup } = require('../services/users');
const error = require('../errors');
const { crypt } = require('../helpers');

exports.users = (req, res) => {
  req.body.password = crypt(req.body.password);
  signup(req.body)
    .then(sign => {
      if (sign.firstName) {
        res.status(200).send(`User ${sign.firstName} created.`);
      } else {
        res.status(400).send(error.databaseError);
      }
    })
    .catch(err => err);
};
