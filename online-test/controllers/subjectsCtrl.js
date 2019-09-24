const express = require('express');
const { Subject } = require('../models/db')
const { ErrorResult, Result } = require('../utils/base_response')
const router = express.Router();
router.use((req, res, next) => {
    // authorize here
    next();
});

router.get('/', (req, res) => {
    let page =0;
    if(req.query.p) page = parseInt(req.query.p);
    let pageSize = 20;
    if(req.query.s) pageSize = parseInt(req.query.s);
    let queryString = '';
    if (req.query.q) queryString = '%' + decodeURIComponent(req.query.q) + '%';
    console.log(req.query.q);
    console.log(queryString);
    let sortColumn = 'subjectname';
    let sortDirection = 'ASC';
    const offSet = (page)* pageSize;
    if (req.query.so) {
        const sortStr = decodeURIComponent(req.query.so).split(' ');
        sortColumn = sortStr[0];
        if (sortStr.length == 2) sortDirection = sortStr[1];
    }

    if (queryString.length <= 2) {
        Subject.count().then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Subject.findAll({
                order: [
                    [sortColumn, sortDirection]
                ],
                offset: offSet,
                limit: pageSize,
                include: [{model: Subject, as: 'parentsub'}]
            }).then(subject => {
                return res.json(PagingResult(subject, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    } else { // search
        // conditions
        const whereClause = {
            [Op.or]: [{
                    subjectname: {
                        [Op.like]: queryString
                    }
                },
                {
                    levels: {
                        [Op.like]: queryString
                    }
                }
            ]
        };
        Subject.count({ where: whereClause }).then(numRow => {
            const totalRows = numRow;
            const totalPages = Math.ceil(totalRows / pageSize);
            Subject.findAll({
                order: [
                    [sortColumn, sortDirection]
                ],
                where: whereClause,
                offset: offSet,
                limit: pageSize,
                include: [{model: Subject, as: 'parentsub'}]
            }).then(subjects => {
                return res.json(PagingResult(subjects, {
                    pageNumber: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    totalPages: totalPages
                }))
            })
        })
    }
});
router.get('/:id', (req, res) => { //d+ là những con số, bắt buộc
    Subject.findByPk(req.params.id).then(type => {
        if (type != null) {
            res.json(Result(type));
        } else {
            res.status(404).json(ErrorResult(404, 'Not Found !!!'));
        }
    });
});


router.post('/',[
    check('subjectname','Must be string').isAlpha()
], (req, res) => { //create 
    //validate data here
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    Subject.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

router.put('/:id', (req, res) => { //updating
    //validate data here
    Subject.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                subjectname: req.body.subjectname,
                

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
    Subject.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(500).send(ErrorResult(500, err.errors));
    });
});

router.get('/getSubjectsByClass/:id(\\d+)', (req, res) => {
    Subject.findAll({
        where: {
            classid: req.params.id
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