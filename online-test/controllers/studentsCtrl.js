const express = require('express');
const { Student, Exam, Class } = require('../models/db')
const { ErrorResult, Result, PagingResult, ObjResult } = require('../utils/base_response')
const crypt = require('../utils/helper')
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

router.get('/', (req, res) => {
    // Student.findAll().then(type => {
    //     res.json(Result(type))
    // });
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);

    const offset = (page) * pageSize;
    // const limit = parseInt(offset) + parseInt(pageSize);
    const limit = pageSize;

    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    let sortColumn = "username";
    let sortDirection = "ASC";
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    if (queryString.length <= 2) {
        Student.count().then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Student.findAll({
                order: [[sortColumn, sortDirection]],
                offset: offset + 1,
                limit: limit,
                include: [
                    { model: Exam, as: 'exams' }
                ]
            }).then(students => {
                return res.json(PagingResult(students, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    } else {
        //condition
        const whereClause = {
            [Op.or]: [
                { fullName: { [Op.like]: queryString } },
                { cmnd: { [Op.like]: queryString } },
                { school: { [Op.like]: queryString } },
                { phone: { [Op.like]: queryString } },
                { code: { [Op.like]: queryString } },
                { username: { [Op.like]: queryString } }
            ]
        }
        Student.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Student.findAll({
                where: whereClause,
                offset: offset,
                limit: limit,
                include: [
                    { model: Exam, as: 'exams' }
                ]
            }).then(students => {
                return res.json(PagingResult(students, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

router.get('/:id', (req, res) => {//d+ là những con số, bắt buộc

    Student.findByPk(
        req.params.id,
        {
            include: [{
                model: Exam,
                as: 'exams'
            }]
        }).then(type => {
            if (type != null) {
                return res.json(ObjResult(type));
            } else {
                res.status(404).json(ErrorResult(404, 'Not Found !!!'));
            }
        });
});

router.post('/', (req, res) => { //create
    //validate data here
    req.body.password = crypt.hash(req.body.password);
    Student.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.put('/:id', (req, res) => { //updating
    //validate data here
    Student.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                fullName: req.body.fullName,
                cmnd: req.body.cmnd,
                school: req.body.school,
                phone: req.body.phone,
                code: req.body.code,
                username: req.body.username,
                password: crypt.hash(req.body.password)

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
    Student.destroy({
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