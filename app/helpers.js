const bcrypt = require('bcrypt');

exports.crypt = pass => bcrypt.hashSync(pass, 10);
