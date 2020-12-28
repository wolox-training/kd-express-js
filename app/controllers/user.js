const bcrypt = require('bcrypt');
const { signup } = require('../services/userService');

const emailValidation = email => {
  const val = email.split('@');
  if (val[1] === 'wolox.com.ar') {
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

const encryptPass = password => {
  bcrypt
    .genSalt(10)
    .then(salts => {
      bcrypt.hash(password, salts).then(hash => hash);
    })
    .catch(err => err);
};

exports.signup = (req, res) => {
  if (req.body && emailValidation(req.body.email) && passwordValidation(req.body.password)) {
    req.body.password = encryptPass(req.body.password);
    console.log(req.body);
    signup(req.body)
      .then(sign => res.status(200).send(`User ${sign} created.`))
      .catch(err => err);
  } else res.status(400).send('Check email, password');
};
