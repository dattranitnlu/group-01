module.exports = (sequelize, type) => {
    return sequelize.define('exams', {
        id: {
            field: 'examid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        start: {
            type: type.DATE,
            allowNull: true
        },
        end: {
            type: type.DATE,
            allowNull: true
        },
        grade: {
            type: type.FLOAT,
            defaultValue: 0.0
        },
        status: {
            type: type.BOOLEAN,
            allowNull: false
        },
        studentid: {
            type: type.INTEGER,
            allowNull: true
        },
        testid: {
            type: type.INTEGER,
            allowNull: true
        }
    }, { timestamps: false })
}