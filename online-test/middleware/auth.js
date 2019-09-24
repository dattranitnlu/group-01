const jwt = require('jsonwebtoken');
const {ErrorResult} = require('./../utils/base_response');
const {appKey} = require('./../utils/helper');

module.exports = (req, res, next) => {
    if (req.url == '/users/login') {
        next();
    } else {
        const authHeader = req.get('Authorization');
        if(!authHeader) {
            return res.status(401).json(ErrorResult(401, 'Not authorizated!'));
        }
        const token = authHeader.split(' ')[1];
        let decoratedToken;
        try {
            decoratedToken = jwt.verify(token, appKey);
        } catch(err) {
            return res.status(500).json(ErrorResult(500, err.message));
        }

        if(!decoratedToken) {
            return res.status(401).json(ErrorResult(401, 'Not authenticated'));
        }

        //assign info back to request object
        req.userid = decoratedToken.userid;
        req.username = decoratedToken.username;
        next();
    }
}