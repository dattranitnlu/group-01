const express = require('express');
const jwt = require('jsonwebtoken');
const helper = require('../utils/helper');
const { User } = require('../models/db');
const { ErrorResult, Result } = require('../utils/base_response')
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

router.get('/', (req, res) => {
    User.findAll().then(type => {
        res.json(Result(type))
    });
});

router.get('/:id', (req, res) => { //d+ là những con số, bắt buộc
    User.findByPk(req.params.id).then(type => {
        if (type != null) {
            res.json(Result(type));
        } else {
            res.status(404).json(ErrorResult(404, 'Not Found !!!'));
        }
    });
});

router.post('/', (req, res) => { //create
    //validate data here
    req.body.password = helper.hash(req.body.password);
    User.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.post('/login', (req, res) => {
    User.findAll({
        where: {
            username: req.body.username,
            password: helper.hash(req.body.password)
        }
    }).then(users => {
        if (users.length != 0) {
            const token = jwt.sign({ userid: users[0].userid, username: users[0].username }, helper.appKey, { expiresIn: '1h' });
            return res.json({
                userid: users[0].userid,
                username: users[0].username,
                fullName: users[0].fullName,
                token: token
            });
        } else {
            return res.json(ErrorResult(401, 'Invalid username or password'));
        }
    })
})

router.put('/:id', (req, res) => { //updating
    //validate data here
    User.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                fullName: req.body.fullName,
                identitycard: req.body.identitycard,
                birthday: req.body.birthday,
                sex: req.body.sex,
                address: req.body.address,
                usertypeid: req.body.usertypeid,
                status: req.body.status

            }).then(type => {
                res.json(Result(type));
            }).catch(err => {
                return res.status(400).send(ErrorResult(400, err.errors));
            });
        } else {
            res.status(404).send(ErrorResult(404, 'Not Found!!'));
        }
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(500).send(ErrorResult(500, err.errors));
    });
});
module.exports = router;