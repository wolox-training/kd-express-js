const { healthCheck } = require('./controllers/healthCheck');
const { users, middleTest } = require('./controllers/users');
const { validateSchemaAndFail, validateUser } = require('./middlewares/data_validation');
const { createUser } = require('./schemas/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', validateSchemaAndFail(createUser), users);
  app.get('/users/:id', validateUser, middleTest);
};
