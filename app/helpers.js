const bcrypt = require('bcrypt');
const config = require('../config').common;

exports.crypt = pass => bcrypt.hashSync(pass, parseInt(config.bcrypt.salt));
exports.decrypt = (pass, hash) => bcrypt.compareSync(pass, hash);
