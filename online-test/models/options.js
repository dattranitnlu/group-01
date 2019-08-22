module.exports = (sequelize, type) => {
    return sequelize.define('options', {
        id: {
            field: 'optionid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        optioncontent: {
            type: type.TEXT,
            allowNull: false
        },
        questionid: {
            type: type.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
}