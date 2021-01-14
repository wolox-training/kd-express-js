const jwt = require('jsonwebtoken');
const { User } = require('../models');
const logger = require('../logger');
const error = require('../errors');
const { decrypt } = require('../helpers');

const signup = user =>
  User.create(user)
    .then(usr => {
      logger.info(`User ${usr.firstName} created successfully`);
      return usr;
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        logger.info('Existing email');
        throw error.mailExistError('Entered email already exists');
      }
      throw error.databaseError(err);
    });

const signin = user =>
  User.findAll({
    where: {
      email: user.email
    }
  })
    .then(usr => {
      if (usr.length === 0) {
        throw error.invalidUserError('Non-existent user');
      }
      if (decrypt(user.password, usr[0].password)) {
        const token = jwt.sign({ usr }, 'shhhh');
        return { token };
      }
      throw error.invalidPassError('Invalid password');
    })
    .catch(err => {
      logger.info('Database error');
      throw err;
    });

const getusers = (limit, offset) =>
  User.findAll({
    limit,
    offset
  })
    .then(usr => usr)
    .catch(err => {
      logger.info('Database error');
      throw err;
    });

module.exports = { signup, signin, getusers };
