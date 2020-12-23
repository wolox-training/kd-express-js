const { User } = require('../models/user');

const signup = user =>
  User.create(user)
    .then(usr => usr)
    .catch(err => err);

module.exports = { signup };
