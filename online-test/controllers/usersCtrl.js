const express = require('express');
const { User } = require('../models/db')
const { ErrorResult, Result } = require('../utils/base_response')
const crypt = require('../utils/helper')
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
    req.body.password = crypt.hash(req.body.password)
    User.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

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
                username: req.body.username,
                password: crypt.hash(req.body.password)
                

            }).then(type => {
                res.json(Result(type));
            }).catch(err => {
                return res.status(400).send(ErrorResult(400, err.errors));
            });
        } else {
            return res.status(404).send(ErrorResult(404, err.errors));
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

router.post('/login', (req,res)=>{
    User.findOne({
        where: {
            username : req.body.username,
            password : crypt.hash(req.body.password)
        }
    }).then(aUser=> {
        if(aUser!=null)
        {
            res.json(Result(aUser));
            /*res.json({
                id: aUser.id,
                fullName: aUser.fullName,
                identitycard: aUser.identitycard,
                birthday: aUser.birthday,
                sex: aUser.sex,
                address: aUser.address,
                usertypeid: aUser.usertypeid,
                username: aUser.username,
                password: aUser.password
            })*/
        }
    })
})
module.exports = router;