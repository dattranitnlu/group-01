const express = require('express');
const { Class, User } = require('../models/db')
const { ErrorResult, Result, PagingResult, ObjResult } = require('../utils/base_response')
const router = express.Router();
const sequelize = require('sequelize');
const Op = sequelize.Op;

router.use((req, res, next) => {
    // authorize here
    next();
});

router.get('/', (req, res) => {
    // Class.findAll().then(type => {
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
    let sortColumn = "classname";
    let sortDirection = "ASC";
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    if (queryString.length <= 2) {
        Class.count().then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Class.findAll({
                order: [[sortColumn, sortDirection]],
                offset: offset + 1,
                limit: limit,
                include: [{
                    model: User,
                    as: 'user'
                }]
            }).then(classes => {
                return res.json(PagingResult(classes, {
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
                { id: { [Op.like]: queryString } },
                { classname: { [Op.like]: queryString } },
                { userid: { [Op.like]: queryString } }
            ]
        }
        Class.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Class.findAll({
                where: whereClause,
                offset: offset,
                limit: limit,
                include: [{
                    model: User,
                    as: 'user'
                }]
            }).then(classes => {
                return res.json(PagingResult(classes, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});

// get By CustomerType
router.get('/getByUser/:id(\\d+)', (req, res) => {
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);

    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);

    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';

    let sortColumn = 'userid';
    let sortDirection = 'ASC';
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    const offset = page * pageSize;
    // const limit = parseInt(offset) + parseInt(pageSize);
    const limit = pageSize;

    if (queryString.length <= 2) {
        // conditions
        const whereClause = {
            userid: req.params.id
        }

        Class.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Class.findAll({
                where: whereClause,
                order: [[sortColumn, sortDirection]],
                offset: offset,
                limit: limit,
                include: [{ model: User, as: 'user' }]
            }).then(classes => {
                return res.json(PagingResult(classes, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages,
                }));
            });
        });
    } else { // search
        // conditions
        const whereClause = {
            userid: req.params.id,
            [Op.or]: [
                { classname: { [Op.like]: queryString } },
                { userid: { [Op.like]: queryString } }
            ]
        }

        Class.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Class.findAll({
                where: whereClause,
                offset: offset,
                limit: limit,
                include: [{ model: User, as: 'user' }]
            }).then(classes => {
                return res.json(PagingResult(classes, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages,
                }));
            });
        });
    }
});

router.get('/:id(\\d+)', (req, res) => { //d+ là những con số, bắt buộc
    Class.findByPk(
        req.params.id,
        {
            include: [{
                model: User,
                as: 'user'
            }]
        }).then(type => {
            if (type != null) {
                res.json(ObjResult(type));
            } else {
                res.status(404).json(ErrorResult(404, 'Not Found !!!'));
            }
        });
});

router.post('/', (req, res) => { //create
    //validate data here
    Class.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.put('/:id(\\d+)', (req, res) => { //updating
    //validate data here
    Class.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                classname: req.body.classname,
                userid: req.body.userid

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
    Class.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(500).send(ErrorResult(500, err.errors));
    });
});

router.get('/getByLecture/:id(\\d+)', (req, res) => {
    Class.findAll({
        where: {
            userid: req.params.id
    }
    }).then(type => {
        if (type != null) {
            res.json(Result(type));
        } else {
            res.status(404).json(ErrorResult(404, 'Not Found !!!'));
        }
    });
});
module.exports = router;