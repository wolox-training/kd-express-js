const { healthCheck } = require('./controllers/healthCheck');
const { users, signin, userlist } = require('./controllers/users');
const { validateSchemaAndFail } = require('./middlewares/data_validation');
const { validateToken } = require('./middlewares/user_validation');
const { createUser } = require('./schemas/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/users', validateToken, userlist);
  app.post('/users', validateSchemaAndFail(createUser), users);
  app.post('/users/sessions', signin);
};
