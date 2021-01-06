const { User } = require('../models');
const logger = require('../logger');
const error = require('../errors');

const signup = user =>
  User.create(user)
    .then(usr => {
      logger.info(`User ${usr.firstName} created successfully`);
      return usr;
    })
    .catch(err => {
      throw error.databaseError(err);
    });

module.exports = { signup };
