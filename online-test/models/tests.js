module.exports = (sequelize, type) => {
    return sequelize.define('tests', {
        id: {
            field: 'testid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startdate: {
            type: type.DATE,
            allowNull: false
        },
        enddate: {
            type: type.DATE,
            allowNull: false
        },
        time: {
            type: type.INTEGER,
            allowNull: false
        },
        code: {
            type: type.INTEGER,
            allowNull: false
        },
        starttime: {
            type: type.TIME,
            allowNull: false
        },
        status: {
            type: type.TIME,
            allowNull: false
        },
        subjectid: {
            type: type.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
}