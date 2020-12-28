const bcrypt = require('bcrypt');
const { User } = require('../models');
const { signup } = require('../services/userService');

const emailValidation = async email => {
  const val = email.split('@');
  const usr = await User.findAll({ where: { email } });
  if (val[1] === 'wolox.com.ar' && usr.length === 0) {
    return true;
  }
  return false;
};

const passwordValidation = pass => {
  const validchars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let bool = true;

  for (let i = 0; i < pass.length; i++) {
    const char = pass.charAt(i).toLowerCase();
    if (validchars.indexOf(char) === -1) {
      bool = false;
    }
  }
  if (bool && pass.length >= 8) {
    return true;
  }
  return false;
};

exports.signup = async (req, res) => {
  if (req.body && (await emailValidation(req.body.email)) && passwordValidation(req.body.password)) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    signup(req.body)
      .then(sign => {
        if (sign.firstName) {
          res.status(200).send(`User ${sign.firstName} created.`);
        } else {
          res.status(400).send('Database error. User not created');
        }
      })
      .catch(err => err);
  } else res.status(400).send('Check wolox domain email or password length');
};
