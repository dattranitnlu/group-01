const express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use('/img', express.static(__dirname + '/img'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const studentCtrl = require('./controllers/students')
app.use('/Students', studentCtrl);



var sever = app.listen(8080, () => { //server chay tren port 8081
    const host = sever.address().address;
    const port = sever.address().port;
    console.log('Server running at http://%s:%s', host, port);

});