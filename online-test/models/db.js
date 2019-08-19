const Sequelize = require('sequelize');
const StudentModel = require('./student')

const sequelize = new Sequelize('OnlineTest', 'sa', '12345', { // sử dụng cho bản exp, bản full không cần
    dialect: 'mssql',
    host: 'localhost',
    dialectOptions: {
        "options": {
            "instanceName": "SQLEXPRESS",
        }
    },
    pool: { max: 20, min: 0, acquire: 30000, idle: 10000 },
    logging: true
});


const Student = StudentModel(sequelize, Sequelize)


// sequelize.sync({ force: true }).then(() => { //run once
//     console.log('Database created !!!!!')
// });


module.exports = {
    Student
}