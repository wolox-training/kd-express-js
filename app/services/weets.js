const axios = require('axios');
const logger = require('../logger');
const error = require('../errors');
const config = require('../../config').common;

const getRandomWeet = () =>
  axios
    .get(config.urlBase)
    .then(response => response.data)
    .catch(err => {
      logger.error(`Error obteniendo informacion desde API geek${err}`);
      throw error.externalApiError;
    });

module.exports = { getRandomWeet };
