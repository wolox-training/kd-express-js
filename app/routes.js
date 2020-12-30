const { healthCheck } = require('./controllers/healthCheck');
const { users } = require('./controllers/users');
const { validateSchemaAndFail } = require('./middlewares/data_validation');
const { createUser } = require('./schemas/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', validateSchemaAndFail(createUser), users);
};
