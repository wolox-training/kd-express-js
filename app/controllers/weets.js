const { getRandomWeet } = require('../services/weetService');

exports.weets = (_, res) =>
  getRandomWeet()
    .then(weet => res.status(200).send(weet))
    .catch(err => err);
