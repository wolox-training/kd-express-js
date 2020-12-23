const { healthCheck } = require('./controllers/healthCheck');
const { weets } = require('./controllers/weets');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/weet', weets);
};
