const { mailDomainError } = require('../errors');
const { REGEX_EMAIL } = require('../constants');

exports.createUser = {
  firstName: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty firstName'
    },
    isLength: {
      options: {
        min: 1,
        max: 30
      },
      errorMessage: 'FirstName must have more than one character and less than 30'
    }
  },
  lastName: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty lastName'
    },
    isLength: {
      options: {
        min: 1,
        max: 30
      },
      errorMessage: 'LastName must have more than one character and less than 30'
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
      errorMessage: 'Password must have more than 8 characters'
    }
  },
  email: {
    in: ['body'],
    exists: {
      errorMessage: 'Empty email'
    },
    isEmail: true,
    custom: {
      options: value => !!value.match(REGEX_EMAIL),
      errorMessage: mailDomainError
    }
  }
};
