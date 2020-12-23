const { User } = require('../models');

const signup = user =>
  User.create(user)
    .then(usr => usr)
    .catch(err => err);

module.exports = { signup };
