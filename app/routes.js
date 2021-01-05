const { healthCheck } = require('./controllers/healthCheck');
const { users, middleTest } = require('./controllers/users');
const { validateSchemaAndFail, validateUser } = require('./middlewares/data_validation');
const { createUser } = require('./schemas/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', validateSchemaAndFail(createUser), users);
  // id numerico y se muestra hola mundo en caso de que sea 1 el ID. Si es diferente le saco un error de usuario no autorizado
  app.get('/users/:id', validateUser, middleTest);
};
