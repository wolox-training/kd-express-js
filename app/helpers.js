const bcrypt = require('bcrypt');

exports.crypt = pass => bcrypt.hashSync(pass, process.env.SALT_BCRYPT);
