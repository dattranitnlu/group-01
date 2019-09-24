const crypto = require('crypto');
const appKey = 'I`m Dat';

const createHash = (text) => {
    return crypto.createHash('sha512')
        .update(text, 'utf8').digest('hex');
};

const decrypt = (text) => {
    return crypto.createHash('sha512')
        .update(text, 'hex').digest('utf8');
}

// const isDate = (value) => {
//     switch (typeof value) {
//         case 'number':
//             return true;
//         case 'string':
//             return !isNaN(Date.parse(value));
//         case 'object':
//             if (value instanceof Date) {
//                 return !isNaN(value.getTime());
//             }
//         default:
//             return false;
//     }
// }

module.exports = {
    hash: createHash,
    decrypt: decrypt,
    appKey: appKey
    // isDate: isDate
}