const crypto = require('crypto');
const appKey = 'I`m Dat';

const createHash = (text) => {
    return crypto.createHash('sha512')
        .update(text, 'utf8').digest('hex');
};

module.exports = {
    hash: createHash,
    appKey: appKey
}