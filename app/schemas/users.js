const { mailDomainError } = require('../errors');
const { REGEX_EMAIL } = require('../constants');

exports.createUser = {
  firstName: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty firstname'
    },
    isLength: {
      options: {
        min: 1,
        max: 30
      },
      errorMessage: 'firstName must have more than one character and less than 30'
    }
  },
  lastName: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty lastname'
    },
    isLength: {
      options: {
        min: 1,
        max: 30
      },
      errorMessage: 'lastname must have more than one character and less than 30'
    }
  },
  password: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty password'
    },
    isLength: {
      options: {
        min: 8
      },
      errorMessage: 'password must have more than 8 characters'
    }
  },
  email: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty mail'
    },
    isEmail: true,
    custom: {
      options: value => !!value.match(REGEX_EMAIL),
      errorMessage: mailDomainError
    }
  }
};
