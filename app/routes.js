const { healthCheck } = require('./controllers/healthCheck');
const { signup } = require('./controllers/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/signup', signup);
};
