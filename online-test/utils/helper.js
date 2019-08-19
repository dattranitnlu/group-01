const crypto = require('crypto');
const createHash = (text) => {
    return crypto.createHash('sha256')
        .update(text, 'utf8').digest('base64');
};

module.exports = {
    hash: createHash
}