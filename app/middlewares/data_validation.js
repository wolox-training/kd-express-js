const { checkSchema, validationResult } = require('express-validator');
const logger = require('../logger');
const errors = require('../errors');

const checkValidationResult = (request, _, next) => {
  const errorsResult = validationResult(request);
  if (!errorsResult.isEmpty()) {
    logger.info('Params validation failed');
    return next(errors.validationError(errorsResult));
  }
  return next();
};

exports.validateUser = (request, _, next) => {
  // eslint-disable-next-line eqeqeq
  if (request.params.id == 1) {
    return next();
  }
  return next(errors.validationError('Not authorized user'));
};

exports.validateSchema = schema => checkSchema(schema);

exports.validateSchemaAndFail = schema => [exports.validateSchema(schema), checkValidationResult];
