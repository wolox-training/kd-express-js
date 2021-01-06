const bcrypt = require('bcrypt');

exports.crypt = pass => bcrypt.hashSync(pass, 10);
exports.decrypt = (pass, hash) => bcrypt.compareSync(pass, hash);
