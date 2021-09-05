const crypto = require('crypto');
const randomAccessToken = crypto.randomBytes(64).toString('hex');
console.log(randomAccessToken);
