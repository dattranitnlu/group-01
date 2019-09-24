module.exports = (sequelize, type) => {
    return sequelize.define('subjects', {
        id: {
            field: 'subjectid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectname: {
            type: type.STRING,
            allowNull: false
        },
        levels: {
            type: type.INTEGER,
            allowNull: false
        },
        parentSub:{
            type: type.INTEGER,
            allowNull: true
        },
        classid:{
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}