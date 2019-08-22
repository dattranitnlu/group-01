module.exports = (sequelize, type) => {
    return sequelize.define('answersheets', {
        id: {
            field: 'answersheetid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        choosenanswer: {
            type: type.INTEGER,
            allowNull: true
        },
        choosentime: {
            type: type.DATE,
            allowNull: true
        },
        grade: {
            type: type.FLOAT,
            defaultValue: 0.0
        },
        examid: {
            type: type.INTEGER,
            allowNull: false
        },
        questionid: {
            type: type.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
}