const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const auth = require('./middleware/auth');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    // if (req.url == '/user/login') {
    //     next();
    // } else {
    //     auth(req, res, next);
    // }
    next();
});

app.use('/img', express.static(__dirname + '/img'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//import and use modules
const studentCtrl = require('./controllers/studentsCtrl')
app.use('/student', studentCtrl);

const usertypesCtrl = require('./controllers/usertypesCtrl');
app.use('/user-type', usertypesCtrl);

const usersCtrl = require('./controllers/usersCtrl');
app.use('/user', usersCtrl);

const classesCtrl = require('./controllers/classesCtrl');
app.use('/class', classesCtrl);

const semestersCtrl = require('./controllers/semestersCtrl');
app.use('/semester', semestersCtrl);

const examsCtrl = require('./controllers/examsCtrl');
app.use('/exam', examsCtrl);

const answersheetsCtrl = require('./controllers/answersheetsCtrl');
app.use('/answersheet', answersheetsCtrl);

const testsCtrl = require('./controllers/testsCtrl');
app.use('/test', testsCtrl);

const questionTypesCtrl = require('./controllers/questionTypesCtrl');
app.use('/question-type', questionTypesCtrl);

const questionsCtrl = require('./controllers/questionsCtrl');
app.use('/question', questionsCtrl);

const testDetailsCtrl = require('./controllers/testDetailsCtrl');
app.use('/test-detail', testDetailsCtrl);

const optionsCtrl = require('./controllers/optionsCtrl');
app.use('/option', optionsCtrl);

const partCtrl = require('./controllers/partsCtrl');
app.use('/part', partCtrl);

const subjectCtrl = require('./controllers/subjectsCtrl');
app.use('/subject', subjectCtrl);


//create a server with port: 8081
var sever = app.listen(8081, () => { //server chay tren port 8081
    const host = sever.address().address;
    const port = sever.address().port;
    console.log('Server running at http://%s:%s', host, port);

});