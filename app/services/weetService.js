const axios = require('axios');

const getRandomWeet = () =>
  axios
    .get('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => response.data)
    .catch(err => err);

module.exports = { getRandomWeet };
