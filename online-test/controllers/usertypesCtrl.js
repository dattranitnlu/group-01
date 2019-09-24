const express = require('express');
const { UserType, User } = require('../models/db')
const { ErrorResult, Result, PagingResult } = require('../utils/base_response')
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

router.get('/', (req, res) => {
    // UserType.findAll().then(type => {
    //     res.json(Result(type))
    // });
    let page = 0;
    if (req.query.p) page = parseInt(req.query.p);

    let pageSize = 20;
    if (req.query.s) pageSize = parseInt(req.query.s);

    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';

    let sortColumn = 'id';
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
        UserType.count().then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            UserType.findAll({
                order: [[sortColumn, sortDirection]],
                offset: offset,
                limit: limit,
                include: [{ model: User, as: 'users' }]
            }).then(userTypes => {
                return res.json(PagingResult(userTypes, {
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
            [Op.or]: [
                { userrole: { [Op.like]: queryString } }
            ]
        }

        UserType.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            UserType.findAll({
                where: whereClause,
                offset: offset,
                limit: limit,
                include: [{ model: User, as: 'users' }]
            }).then(userTypes => {
                return res.json(PagingResult(userTypes, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages,
                }));
            });
        });
    }
});

router.get('/:id', (req, res) => { //d+ là những con số, bắt buộc
    UserType.findByPk(req.params.id).then(type => {
        if (type != null) {
            res.json(Result(type));
        } else {
            res.status(404).json(ErrorResult(404, 'Not Found !!!'));
        }
    });
});

router.post('/', (req, res) => { //create
    //validate data here
    UserType.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.put('/:id', (req, res) => { //updating
    //validate data here
    UserType.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                userrole : req.body.userrole

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
    UserType.destroy({
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