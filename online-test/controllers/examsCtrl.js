const express = require('express');
const { Exam } = require('../models/db')
const { ErrorResult, Result } = require('../utils/base_response')
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

router.get('/', (req, res) => {
    Exam.findAll().then(type => {
        res.json(Result(type))
    });
});

router.get('/:id(\\d+)', (req, res) => { //d+ là những con số, bắt buộc
    Exam.findByPk(req.params.id).then(type => {
        if (type != null) {
            res.json(Result(type));
        } else {
            res.status(404).json(ErrorResult(404, 'Not Found !!!'));
        }
    });
});

router.post('/', (req, res) => { //create 
    //validate data here
    Exam.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.put('/:id(\\d+)', (req, res) => { //updating
    //validate data here
    Exam.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                start: req.body.start,
                end: req.body.end,
                grade: req.body.grade,
                status: req.body.status,
                studentid: req.body.studentid,
                testid: req.body.testid

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
    Exam.destroy({
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